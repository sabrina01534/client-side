import React, { use, useState } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';
import { IoEyeOffSharp } from "react-icons/io5";
import { Link } from 'react-router';

const Register = () => {
    const [error, setError]=useState('')
  const [showPassword, setShowPassword]=useState(false)
   const {signInWithGoogle}=use(AuthContext)

   const handleRegister=(event)=>{
      event.preventDefault();
      const email=event.target.email.value;
      const password=event.target.password.value;

      createUserWithEmailAndPassword(auth,email,password)
      .then(result=>{
        console.log(result)
      })
      .catch(error=>{
        console.log('password shuold be 6 character, Uppercase and Lowercase' )
        setError(error.message);
      })

   }

   const handleGoogleSignIn=()=>{
      signInWithGoogle()
      .then(result=>{
        console.log(result)
      })
      .catch(error=>{
        console.log(error)
      })
    }

    const handlShowPassword =(event)=>{
  event.preventDefault();
  setShowPassword(!showPassword);
    }
    return (
        <div className="card bg-base-100 mx-auto mt-5 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold mb-3">Please Register!</h1>
        <form onSubmit={ handleRegister}>
            <fieldset className="fieldset">
               
               {/* name */}
           <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="name" />
                {/* email  */}

          <label className="label text-black-500">Email</label>
          <input type="text" name='email' className="input" placeholder="Email" />
                 
                {/* url */}
          <label className="label">Image Url</label>
          <input type="text" name='url' className="input" placeholder="url" />
                 {/* password */}
         
            <label className="label">Password</label>

          <div>
            <input type={showPassword ? "text":"password"} name="password" className="input" placeholder="Password" />
          <button onClick={ handlShowPassword }
           className="btn btn-xs absolute mt-2 right-16"><IoEyeOffSharp /></button>
          
          </div>
          
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
         <button onClick={ handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g>
          <path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" 
          d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" 
          d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" 
          d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" 
          d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
         Login with Google
         </button>
       </fieldset>
        </form>
        <p>Already have an Account?Please
            <Link className='text-blue-400 hover:text-blue-800 underline' to='/login'> login</Link></p>
      {
        error && <p className='text-red-500'>{error}</p>
      }
      </div>
    </div>
    );
};

export default Register;