
const FoodCard = ({item}) => {
    const{image,price,recipe,name}=item;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">  $ {price}</p>
  <div className="card-body text-center">
    <h2 className="card-title text-center">{name}</h2>
    <p>{recipe}</p>
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;