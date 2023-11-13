import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Nav from "../Pages/Shared/Nav/Nav";

const Main = () => {

const location=useLocation()
const noHeaderFooter=location.pathname.includes('login')

    return (
        <div>
            {  noHeaderFooter ||  <Nav></Nav>}

              <Outlet></Outlet>

            {  noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;