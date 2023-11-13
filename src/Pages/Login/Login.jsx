import { useEffect, useRef, useState } from "react";
import { AiFillEye,AiFillEyeInvisible } from 'react-icons/ai';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
22


const Login = () => {
   const [show,setShow]=useState(true)
   const [disabled,setDisabled]=useState(true)
   const captchaRef=useRef(null)

const{signIn}=useAuth()

   useEffect(()=>{
    loadCaptchaEnginge(6);
},[])

const handleLogin=e=>{

    e.preventDefault()
    const form=e.target;
    const email=form.email.value;
    const password= form.password.value;
    console.log(email,password);
    signIn(email,password)
    .then(res=>{
        console.log(res.user);
    })

    .catch(err=>{
        console.log(err);
    })
}


const handleCaptcha=()=>{
    const USER_captcha_value=captchaRef.current.value;
     console.log(USER_captcha_value);

     if(validateCaptcha(USER_captcha_value)){
          setDisabled(false) 
     }else{
            setDisabled(true)
     }
}



    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
               <div className="relative">
               <input name="password" type={show?"text":"password"} placeholder="password" className="input input-bordered w-full" required />


               <span onClick={()=>setShow(!show)} className="absolute right-1 top-4"> {show?<AiFillEye></AiFillEye>:<AiFillEyeInvisible></AiFillEyeInvisible>}</span>
               </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>


              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input  type="text" name="captcha" ref={captchaRef} placeholder="type the captcha above" className="input input-bordered" required />

                <button onClick={handleCaptcha} className="btn btn-outline btn-xs mt-2">validate</button>
              </div>


              <div className="form-control mt-6">
              
                <input disabled={disabled} className="btn bg-[#D1A054]" type="submit" value="Login" />
              </div>
            </form>
         
               <p className="text-[#D1A054] text-center p-5 text-lg">New Here? <Link className="font-bold text-xl" to="/signUp">create an account</Link></p>
      
          </div>
        </div>
      </div>
    );
};

export default Login;