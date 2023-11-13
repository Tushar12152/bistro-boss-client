import SectionTitle from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonials = () => {
   const [reviews,setReviews]=useState([])
   useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
   },[])


    return (
        <section className="my-20">
             <SectionTitle
                 subHading={'---What Our Clients Say---'}
                 heading={'TESTIMONIALS'}
             ></SectionTitle>


        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

       

        {
        reviews.map(review=> <SwiperSlide
          key={review._id}
        >
            <div className="my-16 flex flex-col items-center w-[80%] mx-auto">

            <Rating
      style={{ maxWidth: 180 }}
      value={review?.rating}
      readOnly
    />


                <p className="text-center py-8">{review?.details}</p>
                <h3 className="text-2xl">{review?.name}</h3>
            </div>
        </SwiperSlide>)
        }
       
      </Swiper>




        </section>
    );
};

export default Testimonials;