import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner";
import Category from "../../Components/Category/Category";
import Feature from "../../Components/Feature/Feature";
import PopularMenu from "../../Components/PopularMenu/PopularMenu";
import Testimonials from "../../Components/Testimonials/Testimonials";



const Home = () => {
    return (
        <div>

            <Helmet>
                <title>bistro-boss | Home</title>
            </Helmet>
          <Banner></Banner>
          <Category></Category>
          <PopularMenu></PopularMenu>
          <Feature></Feature>
          <Testimonials></Testimonials>
        </div>
    );
};

export default Home;