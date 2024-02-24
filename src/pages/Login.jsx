import React, { useState } from 'react'
import Input_Field from '../components/Input_Field'
import Button from '../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { set_user_auth } from '../store/slices/user_data_slice'
import {auth} from '../config/firebase/index'
import { signInWithEmailAndPassword } from 'firebase/auth'
const Login = () => {
    const [data, setData] = useState({});

    const user_data = useSelector((a)=>a.user_data)
  
    console.log(user_data)
  
    const dispatch = useDispatch()
    const navigate = useNavigate()
  
    const change_handle = (e) => {
      const { value, id } = e.target;
  
      setData({ ...data, [id]: value });
    };

    const submit_handle = async (e) => {
        e.preventDefault();
        try{
            const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password)
            dispatch(set_user_auth(true))
            navigate('/home')
            console.log(userCredential.user)
        }
        catch(error){
            const errorMessage = error.message;
            alert(errorMessage)
            dispatch(set_user_auth(false))
        }

      };
  
  return (
    <>
    <div className='bg-slate-100 h-[100dvh] grid justify-center place-items-center grid-cols-1'>
        
    <form onSubmit={submit_handle}  className='max-w-md lg:w-3/4 xl:w-2/3 mt-10 bg-white p-8 rounded-lg space-y-6'>
            <h1 className='text-center text-3xl text-blue-500 mb-10 font-bold'>LOGIN</h1>
            <div className='space-y-4'>
                <Input_Field
                onChange={change_handle}
                    type="email"
                    id="email"
                    placeholder="Enter Email"
                    required={true}
                />
                <Input_Field
                onChange={change_handle}
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    required={true}
                />
            </div>
            <Button>
                Login
            </Button>
            <div className='flex justify-center'>
                <span className='text-lg'>Don't have an account?</span>
                <Link className='text-lg text-blue-500 font-bold ms-2' to='/'>Signup</Link>
            </div>
    </form>
</div>
    </>
  )
}

export default Login