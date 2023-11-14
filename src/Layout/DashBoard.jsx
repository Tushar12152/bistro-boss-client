import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div className="flex">
             <div className="w-64 min-h-screen bg-[#D1A054] ">
                  <ul className="menu">
                   
                    <li>
                      
                        <NavLink to='/dashboard/userHome'>  <FaHome></FaHome> User Home</NavLink>
                    </li>
                    <li>
                      
                        <NavLink to='/dashboard/reservation'>  <FaCalendar></FaCalendar> Reservation</NavLink>
                    </li>



                    <li>
                      
                      <NavLink to='/dashboard/cart'>  <FaShoppingCart></FaShoppingCart> My Cart</NavLink>
                  </li>
                    <li>
                      
                      <NavLink to='/dashboard/review'>  <FaAd></FaAd> Add Review</NavLink>
                  </li>
                    <li>
                      
                      <NavLink to='/dashboard/booking'>  <FaList></FaList> My Booking</NavLink>
                  </li>



                  </ul>
             </div>
             <div className="flex-1">
                 <Outlet></Outlet>
             </div>
        </div>
    );
};

export default DashBoard;