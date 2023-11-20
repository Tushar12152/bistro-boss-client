import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import Cart from "../Pages/DashBoard/Cart";
import AllUsers from "../Pages/DashBoard/Admin/AllUsers";
import AddItems from "../Pages/DashBoard/Admin/AddItems";
import ManageItems from "../Pages/DashBoard/Admin/ManageItems";
// import AdminRoute from "./AdminRoute";
import UpdateItem from "../Pages/DashBoard/Admin/UpdateItem";
import Payment from "../Pages/DashBoard/Payment";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory";



const Routs = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main> ,
        children:[
            {
                path:"/",
                element:<Home></Home>,
            },
            {
                path:"menu",
                element:<Menu></Menu>
            },
            {
                path:"/order/:category",
                element:<Order></Order>
            },
           {
                path:"/login",
                element:<Login></Login>
           },
           {
                path:"/signUp",
                element:<SignUp></SignUp>
           },
           {
            path:"/secret",
            element:<PrivateRoute>
                         <Secret></Secret>
                    </PrivateRoute>
           }

        ]
    
    },
    {
        path:"/dashboard",
        element:<PrivateRoute>
            <DashBoard></DashBoard>
        </PrivateRoute>,
        children:[
            {
                 path:"/dashboard/cart",
                 element:<Cart></Cart>
            },
            {
            path:'/dashboard/payment',
            element:<Payment></Payment>
            },
            {
                path:'/dashboard/paymentHistory',
                element:<PaymentHistory></PaymentHistory>
            },

              //admin routs

            {
                path:"/dashboard/users",
                element:<AllUsers></AllUsers>
           
            },
            {
                path:"/dashboard/addItems",
                element:<AddItems></AddItems>
               
            },
            {
                path:'/dashboard/manageItems',
                element:<ManageItems></ManageItems>
            },
            {
                path:'/dashboard/updateItem/:id',
                element:<UpdateItem></UpdateItem>,
                loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
            }
        ]

    }
])

export default Routs;