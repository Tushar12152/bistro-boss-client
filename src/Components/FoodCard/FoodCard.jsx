import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";


const FoodCard = ({item}) => {
   const{image,price,recipe,name}=item;
   const {user}=useAuth()
   const userEmail=user?.email
   const navigate=useNavigate()
   const location=useLocation()
    
   const handleAddToCart=(food)=>{
        // console.log(food,userEmail);


      if(user && user?.email){

        const{category,image,name,price,recipe}=food;
        const addCart={category,image,name,price,recipe,userEmail}

        axios.post('http://localhost:5000/carts',addCart)
         .then(res=>{
            console.log(res.data);
            if(res?.data?.insertedId){
              Swal.fire('your food is added to cart')
            }
         })


      }

      else{
        Swal.fire({
          title: "You are not Logged In",
          text: "Please Login to add to the cart?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes,Log In!"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login',{state:{from:location}})
          }
        });
      }

        

   }


    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">  $ {price}</p>
  <div className="card-body text-center">
    <h2 className="card-title flex flex-col items-center">{name}</h2>
    <p>{recipe}</p>
    
    <div className="card-actions justify-center my-5">
      <button
       onClick={()=>handleAddToCart(item)}
      className="btn bg-slate-100 btn-outline border-0 border-b-4 border-orange-400 ">Add to Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;