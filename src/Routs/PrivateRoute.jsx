import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({children}) => {

const {user}=useAuth()

  if(user){

      return children
  }
  else{
    return <Navigate to="/login"></Navigate>
  }
};

export default PrivateRoute;