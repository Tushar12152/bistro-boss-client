import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";



const SignUp = () => {
const{register,handleSubmit,formState:{ errors }} = useForm()
const onSubmit = (data) => {
    console.log(data)
}


    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SignUp now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name"  {...register("name" ,{required:true})} type="text" placeholder="Name" className="input input-bordered" />
          {errors.name && <span className="text-red-600">Name is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email"  {...register("email",{required:true})} type="email" placeholder="email" className="input input-bordered" />

          {errors.email && <span className="text-red-600">email is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password"  {...register("password",{required:true,
          minLength:6,
          maxLength:20,
        //   pattern:/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])$/
        
        })} type="password" placeholder="password" className="input input-bordered"  />

          {errors.password && <span className="text-red-600">Password is required</span>}

          {errors.password?.type==='minLength' && <span className="text-red-600">Password must be 6 charecter</span>}

          {errors.password?.type==='pattern' && <span className="text-red-600">Password must be one upper case one lower case one number and one special cherecter</span>}
          {errors.password?.type==='maxLength' && <span className="text-red-600">Password max length 20</span>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
         

          <input className="btn bg-[#D1A054]" type="submit" value="Sign Up" />
        </div>
      </form>

      <p className="text-[#D1A054] text-center p-5 text-lg">Already Have an Account? <Link className="font-bold text-xl" to="/login">Log In</Link></p>
    </div>
  </div>
</div>
    );
};

export default SignUp;