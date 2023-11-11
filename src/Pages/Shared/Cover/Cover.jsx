import { Parallax } from 'react-parallax';

const Cover = ({img,title,description }) => {
    return (


        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
        <div>
            <div className="hero h-[700px]" >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className=" bg-black   bg-opacity-30 py-20 px-60">
      <h1 className="mb-5 text-5xl font-bold ">{title}</h1>
      <p className="mb-5">{description}</p>
      
    </div>
  </div>
</div>
        </div>
    </Parallax>



       
    );
};

export default Cover;