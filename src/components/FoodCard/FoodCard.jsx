import React from "react";

const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="bg-slate-900 absolute right-0 mt-4 px-3  text-white">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline bg-slate-100 border-0 border-b-orange-500 border-b-4">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
