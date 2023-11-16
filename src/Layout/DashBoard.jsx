import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart,  FaUser,  FaUtensils,} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../Hooks/useCarts";
import { MdEmail } from "react-icons/md";

const DashBoard = () => {
const[cart]=useCarts()



//TODO: get isAdmin from the database
const isAdmin=true;

    return (
        <div className="flex gap-2">
             <div className="w-64 min-h-screen bg-[#D1A054] ">
                  <ul className="menu">
                   
                   {
                    isAdmin? <>
                     <li>
                      
                      <NavLink to='/dashboard/adminHome'>  <FaHome></FaHome> Admin Home</NavLink>
                  </li>
                  <li>
                    
                      <NavLink to='/dashboard/addItems'>  <FaUtensils></FaUtensils> Add Items</NavLink>
                  </li>



                  <li>
                    
                    <NavLink to='/dashboard/manageItems'>  <FaList></FaList> Manage Items</NavLink>
                </li>
                  <li>
                    
                    <NavLink to='/dashboard/bookings'>  <FaBook></FaBook> Manage Bookings</NavLink>
                </li>
                  <li>
                    
                    <NavLink to='/dashboard/users'>  <FaUser></FaUser> All Users</NavLink>
                </li>
                    </>
                    
                    :
                    
                    <>
                     <li>
                      
                      <NavLink to='/dashboard/userHome'>  <FaHome></FaHome> User Home</NavLink>
                  </li>
                  <li>
                    
                      <NavLink to='/dashboard/reservation'>  <FaCalendar></FaCalendar> Reservation</NavLink>
                  </li>



                  <li>
                    
                    <NavLink to='/dashboard/cart'>  <FaShoppingCart></FaShoppingCart> My Cart({cart?.length})</NavLink>
                </li>
                  <li>
                    
                    <NavLink to='/dashboard/review'>  <FaAd></FaAd> Add Review</NavLink>
                </li>
                  <li>
                    
                    <NavLink to='/dashboard/booking'>  <FaList></FaList> My Booking</NavLink>
                </li>
                    </>
                   }

                  <div className="divider"></div> 


                  <li>
                      
                      <NavLink to='/'>  <FaHome></FaHome>  Home</NavLink>
                  </li>
                  <li>
                      
                      <NavLink to='/order/salad'>  <FaSearch></FaSearch>  Menu</NavLink>
                  </li>
                  <li>
                      
                      <NavLink to='/order/salad'>  <MdEmail></MdEmail> Contact</NavLink>
                  </li>






                  </ul>
             </div>
             <div className="flex-1 p-8">
                 <Outlet></Outlet>
             </div>
        </div>
    );
};

export default DashBoard;