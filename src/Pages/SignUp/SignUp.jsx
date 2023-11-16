// import { Helmet } from "react-helmet-async";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";
// import Swal from "sweetalert2";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";



// const SignUp = () => {
//     const axiosPublic=useAxiosPublic()
//     const {createUser,updateUserProfile,logOut}=useAuth()
//     const navigate=useNavigate()

// const{register,handleSubmit,reset,formState:{ errors }} = useForm()
// const onSubmit = (data) => {
//     console.log(data)
//     createUser(data.email,data.password)
//     .then(res=>{
//            console.log(res.user);

//            updateUserProfile(data.name,data.photoURL)
//            .then(()=>{
//              console.log('user profile info updated');

//              //create user entry in the database


//              const userInfo={
//                   name:data?.name,
//                   email:data?.email,

//              }

//              axiosPublic.post('/users',userInfo)
//              .then(res=>{
//                if(res.data.insertedId){


//                 reset()
//                 Swal.fire({
//                    position: "top-end",
//                    icon: "success",
//                    title: "user created successfully",
//                    showConfirmButton: false,
//                    timer: 1500
//                  });
                 
//                  logOut()
//                  .then(()=>{
//                    navigate('/login')
//                  })
   
//               }})

              


//                })

//              })

//              .catch(err=>{
//               console.log(err);
//           })
            


//     }


   
// }




   

// return (
//         <div className="hero min-h-screen bg-base-200">
//             <Helmet>
//                  <title>Bistro-Boss | Sign up</title>
//             </Helmet>
//   <div className="hero-content flex-col lg:flex-row-reverse">
//     <div className="text-center lg:text-left">
//       <h1 className="text-5xl font-bold">SignUp now!</h1>
//       <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//     </div>
//     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//       <form onSubmit={handleSubmit(onSubmit)} className="card-body">
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Name</span>
//           </label>
//           <input name="name"  {...register("name" ,{required:true})} type="text" placeholder="Name" className="input input-bordered" />
//           {errors.name && <span className="text-red-600">Name is required</span>}
//         </div>

//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Photo URL</span>
//           </label>
//           <input name="photoURL"  {...register("photoURL" ,{required:true})} type="text" placeholder="Photo URL" className="input input-bordered" />
//           {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Email</span>
//           </label>
//           <input name="email"  {...register("email",{required:true})} type="email" placeholder="email" className="input input-bordered" />

//           {errors.email && <span className="text-red-600">email is required</span>}
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Password</span>
//           </label>
//           <input name="password"  {...register("password",{required:true,
//           minLength:6,
//           maxLength:20,
//         //   pattern:/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])$/
        
//         })} type="password" placeholder="password" className="input input-bordered"  />

//           {errors.password && <span className="text-red-600">Password is required</span>}

//           {errors.password?.type==='minLength' && <span className="text-red-600">Password must be 6 charecter</span>}

//           {errors.password?.type==='pattern' && <span className="text-red-600">Password must be one upper case one lower case one number and one special cherecter</span>}
//           {errors.password?.type==='maxLength' && <span className="text-red-600">Password max length 20</span>}
//           <label className="label">
//             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//           </label>
//         </div>
//         <div className="form-control mt-6">
         

//           <input className="btn bg-[#D1A054]" type="submit" value="Sign Up" />
//         </div>
//       </form>

//       <p className="text-[#D1A054] text-center p-5 text-lg">Already Have an Account? <Link className="font-bold text-xl" to="/login">Log In</Link></p>
//     </div>
//   </div>
// </div>
//     );
// ;

// export default SignUp;






import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile, logOut } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Creating user and updating profile
    createUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);

        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            console.log('User profile info updated');

            // Creating user entry in the database
            const userInfo = {
              name: data?.name,
              email: data?.email,
            };

            axiosPublic
              .post('/users', userInfo)
              .then((res) => {
                if (res.data.insertedId) {
                  console.log('user added to the database');
                  reset(); // Reset the form fields
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully',
                    showConfirmButton: false,
                    timer: 1500,
                  });

                  logOut()
                    .then(() => {
                      navigate('/login');
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Bistro-Boss | Sign up</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">SignUp now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                {...register('name', { required: true })}
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && <span className="text-red-600">Name is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photoURL"
                {...register('photoURL', { required: true })}
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
              />
              {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                {...register('email', { required: true })}
                type="email"
                placeholder="Email"
                className="input input-bordered"
              />
              {errors.email && <span className="text-red-600">Email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                {...register('password', {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  // pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])$/,
                })}
                type="password"
                placeholder="Password"
                className="input input-bordered"
              />
              {errors.password && <span className="text-red-600">Password is required</span>}
              {errors.password?.type === 'minLength' && (
                <span className="text-red-600">Password must be at least 6 characters</span>
              )}
              {errors.password?.type === 'pattern' && (
                <span className="text-red-600">
                  Password must contain at least one uppercase, one lowercase, one number, and one special character
                </span>
              )}
              {errors.password?.type === 'maxLength' && (
                <span className="text-red-600">Password maximum length is 20 characters</span>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn bg-[#D1A054]" type="submit" value="Sign Up" />
            </div>
          </form>
          <p className="text-[#D1A054] text-center p-5 text-lg">
            Already Have an Account?{' '}
            <Link className="font-bold text-xl" to="/login">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
