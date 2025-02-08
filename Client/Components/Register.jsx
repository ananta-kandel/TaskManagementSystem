import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import {globalConstant} from "../Services/Constant";
const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) =>{
    try{
      const res = await axios.post(`${globalConstant.serverUrl}/user/register`, data)
      if(res.status === 200){

          localStorage.setItem('id',res.data.message.id)
          navigate("/login")
      }
    }
    catch(e){
     toast.warn("Something went wrong")
    }
      
        
  }

  return (
    <>
    <div className='md:w-[40%] m-auto w-[90%] mb-[20px]'>
     <div className='mt-[1.5rem]'>
        <p className='text-2xl font-bold'>Register</p>
        <div className='flex gap-2 mt-2 '>
          <Link to="/login"><p className='hover:text-primary-red  hover:underline text-sm'>Already have account , log in?</p></Link>
        </div>
     </div>
     <form onSubmit={handleSubmit(onSubmit)}>
     <div className='mt-5 flex flex-col gap-6'>
        <div className='flex flex-col gap-2'>
            <p>Username</p>
            <input {...register("name",{ required: true,minLength: 6  })}  focusBorderColor='#cd001b' placeholder='username'/>
            {errors.username && <span className='text-primary-red'>Field is required and must have minimum 6 character</span>}
        </div>
        <div className='flex flex-col gap-2'>
            <p>Email</p>
            <input {...register("email",{ required: true, pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com)$/i })} focusBorderColor='#cd001b' placeholder='Email'/>
            {errors.email && <span className='text-primary-red'>provide the proper email</span>}
        </div>
        <div className='flex flex-col gap-2'>
            <p>password</p>
            <input {...register("password", { required: true, minLength: 6})}  type="password" focusBorderColor='#cd001b' placeholder='Password'/>
            {errors.password && <span className='text-primary-red'>Field is required and must have minimum 6 character</span>}
        </div>
        <div className='flex flex-col gap-2'>
            <p>Confirm Password</p>
            <input  {...register("passwordConfirmation", {
            required: true,
            validate: (val) => {
           if (watch('password') != val) {
             return "Your passwords do no match";
           }
      },
      })} type="password" focusBorderColor='#cd001b' placeholder='confirmation Password'/>
            {errors.cpassword && <span className='text-primary-red'>{errors.cpassword.message}</span>}
        </div>
        <input className="hover:bg-red-700 mt-4 text-lg font-medium w-[100%] text-blue-900 bg-primary-red hover:shadow-md hover:shadow-primary-red/30 rounded-lg px-5 py-2 cursor-pointer " type='submit' value="Register"/>
     </div>
    </form>
    </div>
    </>
  )
}

export default Register