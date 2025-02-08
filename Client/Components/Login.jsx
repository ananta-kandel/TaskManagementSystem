import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
// import { Input} from '@chakra-ui/react'

import { useForm } from "react-hook-form"
import useSignIn from 'react-auth-kit/hooks/useSignIn';

//api
import {globalConstant} from "../Services/Constant"
import axios from 'axios';


import { toast } from 'react-toastify';

const Login = () => {
  const signIn = useSignIn();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  
  const onSubmit = async(data) =>{
    try{
      const res = await axios.post(`${globalConstant.serverUrl}/user/login`, data)
      console.log(res);
      const token = res.data.token
      if(res.status === 200){
         toast.success("Login sucessfully")
          if(signIn({
              auth: {
                  token: token,
                  type: 'Bearer'
              },
          })){ // Only if you are using refreshToken feature
              // Redirect or do-something
          }else {
              //Throw error
          }
      }
    
  navigate("/dashboard")
    }
  catch(e){
  toast.warn("something went wrong,try again")
    }   
  } 

  return (
    <>
    <div className='md:w-[40%] m-auto w-[90%] mb-[20px]'>
     <div className='mt-[1.5rem]'>
        <p className='text-2xl font-bold'>Log in</p>
     </div>
     <form onSubmit={handleSubmit(onSubmit)}>
     <div className='mt-5 flex flex-col gap-6'>
        <div className='flex flex-col gap-2'>
            <p>Username</p>
            <input {...register("name",{ required: true,minLength: 6  })}  focusBorderColor='#cd001b' placeholder='username'/>    
            {errors.username && <span className='text-primary-red'>Field is required and must have minimum 6 character</span>}
        </div>
        <div className='flex flex-col gap-2'>
            <p>password</p>
            <input {...register("password",{ required: true, minLength: 6 })} focusBorderColor='#cd001b' placeholder='Password'/>
            {errors.password&& <span className='text-primary-red'>Minimum 6 character is required</span>}
        </div>
     <Link to=""><p className='hover:text-primary-red hover:underline text-sm m-2'>Forget Password?</p></Link>
     <input className='hover:bg-red-700 text-lg font-medium w-[100%] text-blue-900 bg-primary-red hover:shadow-md hover:shadow-primary-red/30 rounded-lg px-5 py-2 cursor-pointer' type="submit" value="login" />
     </div>
     </form>
     
    </div>
    </>
  )
}

export default Login
