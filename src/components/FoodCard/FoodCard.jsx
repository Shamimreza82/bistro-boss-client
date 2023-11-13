import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCarts from "../../Hooks/useCarts";




const FoodCard = ({item}) => {
    const {_id, name, image, price, recipe} = item
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCarts()

   const {user} = useAuth()

    const handleAddToCart = (food) => {

      if(user && user.email){
        //  send card cart yo the database
        console.log(user.email, food);
        const cartItems = {
            menuId: _id,
            email: user.email, 
            name, 
            image,
            price
        }

        axiosSecure.post('/carts', cartItems)
        .then(res => {
          if(res.data.acknowledged){
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${name} name name added to you card`,
              showConfirmButton: false,
              timer: 2000
            });
            refetch()
          }
        })

      } else {
        Swal.fire({
          title: "you are not login ",
          text: "Please login to add to the cart ",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes! Login"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from: location}})
          }
        });
      }
    }



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
          <button onClick={()=> handleAddToCart(item)}
           className="btn btn-outline bg-slate-100 border-0 border-b-orange-500 border-b-4">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
