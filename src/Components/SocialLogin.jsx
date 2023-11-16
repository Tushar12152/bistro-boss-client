import { FaGoogle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const SocialLogin = () => {
    const {GooglePopUp}=useAuth()
    const navigate=useNavigate()

    const location=useLocation()
    const from = location.state?.from?.pathname || "/";
    const axiosPublic=useAxiosPublic()

    const googlepopUp=()=>{
        GooglePopUp()
        .then(res=>{
        //   console.log(res.user);

          const userInfo={
            email:res.user?.email,
            name:res.user?.displayName,
          }

        //   console.log(userInfo);

            axiosPublic.post("/users",userInfo)
            .then((res)=>{
                 console.log(res.data);
               
                 navigate(from,{replace:true})
                 Swal.fire('successfully Logged in')
            })
          
       
      })
      
      .catch(err=>{
          console.log(err);
      })
      }
      
  return (
    <div className="text-center py-4">
      <button onClick={googlepopUp} className="btn"><FaGoogle></FaGoogle> Google</button>
    </div>
  );
};

export default SocialLogin;
