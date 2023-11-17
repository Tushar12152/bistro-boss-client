import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";



const imgHostingKey=import.meta.env. VITE_IMGBB_SECRET_KEY;
const imageHostingAPI=`https://api.imgbb.com/1/upload?key=${imgHostingKey}`

const AddItems = () => {
  
    const { register, handleSubmit,reset } = useForm();
    const axiosPublic=useAxiosPublic()
    const axiosSecure=useAxiosSecure()

  const onSubmit = async(data) => {
    console.log(data);

    //image upload to imgbb and get url
    const imageFile={image:data.image[0]}
    const res=await axiosPublic.post(imageHostingAPI,imageFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        }},)

        if(res.data.success){
            const menuItems={
                name:data?.name,
                price:parseFloat(data?.price),
                category:data?.category,
                recipe:data?.reciepe,
                image:res?.data?.data?.display_url
            }

          const menuRes= await axiosSecure.post('/menu',menuItems)
          console.log(menuRes.data);
          if(menuRes.data.insertedId){
            reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} successfully added `,
                showConfirmButton: false,
                timer: 1500
              });
          }

        }
        // console.log(res.data.data.display_url);
    
  };

  return (
    <div>
      <SectionTitle
        heading={"ADD AN ITEM"}
        subHading={"---What's new?---"}
      ></SectionTitle>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
         
          <div className="form-control w-full  my-6 ">
            <label className="label">
              <span className="label-text">Reciepe Name*</span>
            
            </label>
            <input
              {...register("name", {required:true})}
             
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full"
            />
           
          </div>


        <div className="flex  gap-6">
              {/* category */}
              <div className="form-control w-full  my-6 ">
            <label className="label">
              <span className="label-text">Category*</span>
            
            </label>
            <select
            defaultValue='default'
            {...register("category", {required:true})}
            className="select select-bordered w-full"
          >
            <option disabled value='default'>
              select a Category
            </option>
            <option value="salad">Salad</option>
            <option value="pizza">Pizza</option>
            <option value="soup">Soup</option>
            <option value="dessert">Dessert</option>
            <option value="drinks">Drinks</option>
          </select>
           
          </div>

              {/* price */}

              <div className="form-control w-full  my-6 ">
            <label className="label">
              <span className="label-text">Price*</span>
            
            </label>
            <input
              {...register("price", {required:true})}
              type="text"
              placeholder="price"
              className="input input-bordered w-full"
            />
           
          </div>
         </div>

{/* reciepe details */}

<div className="form-control">
  <label className="label">
    <span className="label-text">Recipe Details</span>
    
  </label>
  <textarea {...register('reciepe', {required:true})} className="textarea textarea-bordered h-24" placeholder="Reciepe Details"></textarea>
  
</div>


<div className="form-control w-full  my-6 ">
<input {...register('image', {required:true})} type="file" className="file-input w-full max-w-xs" />
</div>

          

         <button className="btn  bg-gradient-to-r from-[#835D23] to-[#B58130] text-white">Add Item <FaUtensils className="ml-2"></FaUtensils></button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
