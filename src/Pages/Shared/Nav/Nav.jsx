import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const Nav = () => {
  const {logOut,user}=useAuth()
  console.log(user);

const handleLogOut=()=>{
   logOut()
   .then(()=>{
     Swal.fire('log out successfully compleate')
   })
    .catch(err=>{
      console.log(err);
    })

}



const navOptions=<div className="flex gap-6 items-center ">


<NavLink to="/" className={({ isActive, isPending  }) => isPending ? "pending" : isActive ? "bg-yellow-500 p-2 rounded-lg" : "" } > Home</NavLink>


<NavLink to="/secret" className={({ isActive, isPending  }) => isPending ? "pending" : isActive ? "bg-yellow-500 p-2 rounded-lg" : "" } > Secret</NavLink>


<NavLink to="/menu" className={({ isActive, isPending  }) => isPending ? "pending" : isActive ? "bg-yellow-500  p-2 rounded-lg" : "" } > Our Menu</NavLink>


<NavLink to="/order/salad" className={({ isActive, isPending  }) => isPending ? "pending" : isActive ? "bg-yellow-500  p-2 rounded-lg" : "" } > Order Food</NavLink>


{
  user?

  
  <button onClick={handleLogOut}>Log Out</button>
  :
  <NavLink to="/login" className={({ isActive, isPending  }) => isPending ? "pending" : isActive ? "bg-yellow-500  p-2 rounded-lg" : "" } > Log In</NavLink>
  

  }



</div>




    return (
        <>
                <div className="navbar max-w-screen-xl fixed z-10 bg-opacity-30 bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

         {navOptions}
      </ul>
    </div>
    <a className=" normal-case text-xl">BISTRO BOSS</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </>
    );
};

export default Nav;