import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({children}) => {

    const[isAdmin,isAdminLoading]=useAdmin();
    const [user,loading]=useAuth()

    const location =useLocation()

if(loading||isAdminLoading){
    return  <progress className="progress w-56"></progress>
}



  if(user||isAdmin){

      return children
  }
  else{
    return <Navigate state={{from:location}} replace to="/login"></Navigate>
  }
};


export default AdminRoute;