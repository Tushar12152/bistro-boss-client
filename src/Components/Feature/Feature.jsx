import SectionTitle from "../SectionTitle/SectionTitle";
import featureImg from '../../assets/home/featured.jpg'
import './Feature.css'

const Feature = () => {
    return (
        <div className="feature-item  bg-fixed text-white pt-8 my-20">
            <SectionTitle
              subHading={'---Check it out---'}
              heading={'FROM OUR MENU'}
            ></SectionTitle>

  <div className="md:flex  bg-slate-500 
        bg-opacity-40 justify-center items-center py-20 pt-12 px-36 gap-10">
     <div>
          <img src={featureImg} alt="" />
     </div>
     <div className="md:ml-10 ">
         <p>March 20, 2023</p>
         <p className="uppercase font-bold ">WHERE CAN I GET SOME?</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

         <button className="btn btn-outline border-0 border-b-4 ">Read More</button>
     </div>
  </div>


        </div>
    );
};

export default Feature;