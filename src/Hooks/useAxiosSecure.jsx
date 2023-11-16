import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

 const axiosSecure=axios.create({
     baseURL:"http://localhost:5000/"
})

const useAxiosSecure = () => {
    const{logOut}=useAuth()
    const navigate=useNavigate()

    axiosSecure.interceptors.request.use(function (config) {
        // Do something before request is sent
        const token=localStorage.getItem('access-token')
        // console.log('req is stop by interceptors',token);

        config.headers.authorizaton=`bearer ${token}`

        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });


//intercepts 401 and 403 status

axiosSecure.interceptors.response.use(function(response){
    return response
},async(error)=>{
    const status=error.response.status;
    // console.log('status error in the interceptor',status);
    if(status===401||status===403){
          await logOut()
          navigate('/login')
    }

    return Promise.reject(error)
})




    return axiosSecure
};

export default useAxiosSecure;