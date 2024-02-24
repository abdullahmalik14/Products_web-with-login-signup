
import React, { useState } from 'react'
import Input_Field from '../components/Input_Field'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase/index'

const Signup = () => {
    const [data, setData] = useState({});

    const change_handle = (e) => {
      const { value, id } = e.target;
  
      setData({ ...data, [id]: value });
    };

    const submit_handle = (e) => {
        e.preventDefault();
    
        // console.log(data)
    
        createUserWithEmailAndPassword(auth, data.email, data.password)
        
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log('user', user)
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('errorMessage', errorMessage)
            // ..
          });
      };
    
    return (
        <>
            <div className='bg-slate-100 h-[100dvh] grid justify-center place-items-center grid-cols-1'>
                <form onSubmit={submit_handle} className='max-w-md lg:w-3/4 xl:w-2/3 mt-10 bg-white p-8 rounded-lg space-y-6'>
                        <h1 className='text-center text-3xl text-blue-500 mb-10 font-bold'>SIGNUP</h1>

                        <div className='flex space-x-6'>
                            <Input_Field
                                onChange={change_handle}
                                type="text"
                                placeholder="Enter First name"
                                required={true}

                            />
                            <Input_Field
                            onChange={change_handle}
                                type="text"
                                placeholder="Enter Last name"
                                required={true}

                            />
                        </div>
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
                            Signup
                        </Button>
                        <div className='flex justify-center'>
                            <span className='text-lg'>Already have an account?</span>
                            <Link className='text-lg text-blue-500 font-bold ms-2' to='/login'>Login</Link>
                        </div>
                </form>
            </div>
        </>
    )
}

export default Signup

