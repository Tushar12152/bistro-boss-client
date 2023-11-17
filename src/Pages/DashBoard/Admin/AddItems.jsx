import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
            {...register("category", {required:true})}
            className="select select-bordered w-full"
          >
            <option disabled selected>
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
