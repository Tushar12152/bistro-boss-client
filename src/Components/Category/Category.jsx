import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "./styles.css";
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import SectionTitle from "../SectionTitle/SectionTitle";



const Category = () => {
    return (
       <section>

        <SectionTitle 
        subHading={'---From 11:00am to 10:00pm---'} 
        heading={'ORDER ONLINE'}
        > </SectionTitle>
        
   

         <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper mb-24">
        <SwiperSlide>
            <img className="" src={slide1} />
            <h3 className="text-4xl mr-28 uppercase text-center -mt-28 text-white ">salad</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide2} />
        <h3 className="text-4xl mr-28 uppercase text-center -mt-28 text-white ">PIZZA</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide3} />
        <h3 className="text-4xl mr-28 uppercase text-center -mt-28 text-white ">soups</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide4} />
        <h3 className="text-4xl mr-28 uppercase text-center -mt-28 text-white ">dessers</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide5} />
        <h3 className="text-4xl mr-28 uppercase text-center -mt-20 text-white ">salad</h3>
        </SwiperSlide>
       
      </Swiper>
       </section>
    );
};

export default Category;