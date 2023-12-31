import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({children}) => {

  
  const {user,loading}=useAuth()
  const location =useLocation()

if(loading){
    return  <progress className="progress w-56"></progress>
}



  if(user){

      return children
  }
  else{
    return <Navigate state={{from:location}} replace to="/login"></Navigate>
  }
};

export default PrivateRoute;