import { Button, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { set_user_auth } from "../store/slices/user_data_slice";

const Navbar_Component = () => {
  const user_data = useSelector((store) => store.user_data);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logout_handle = () =>{
    signOut(auth).then((res)=>{
        dispatch(set_user_auth(false))
        navigate('/login')
        console.log('logout ho gya...!')
    })

  }
  return (
    <div className="bg-blue-500 h-20 px-3 flex items-center justify-between">
      <div className="text-3xl text-white font-bold">Logo</div>

      <div>
        {user_data.loading ? (
          <CircularProgress color="success" />
        ) : (
          <div>

            {user_data.isLoggedIn ? (
              <div className="space-x-3 text-white font-medium">
                <Typography>Username</Typography>
                <button className="text-white" onClick={logout_handle}>Logout</button>
              </div>
            ) : (
              <div className="space-x-3 text-white font-medium">
                <Link to="/login">Login</Link>
                <span>|</span>
                <Link to="/">Signup</Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export { Navbar_Component };
