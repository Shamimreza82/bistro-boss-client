import { FaTrash } from "react-icons/fa";
import useCarts from "../../../Hooks/useCarts";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCarts();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  console.log(totalPrice);
  let count = 1

  const axiosSecure = useAxiosSecure()

  const handelDelete = (_id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        
        axiosSecure.delete(`/carts/${_id}`)
        .then(res => {
            console.log(res);
            if(res.data.deletedCount > 0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  refetch()
            }
              
        })

        }
      });
  }

  return (
    <div>
      <div className="flex justify-evenly pt-10">
        <h1 className="text-3xl"> Items: {cart.length}</h1>
        <h2 className="text-3xl"> Total Price: {totalPrice}</h2>

        {
          cart.length ? <Link to='/dashboard/payment'>
          <button disabled={!cart.length} className="btn">pay</button> 
          </Link> : 
          <button disabled className="btn">pay</button> 

        }

      </div>
      <div className="divider"></div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                    #
                </th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item) => (
                <tr key={item._id}>
                  <th>
                    {count++}
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item.name}
                  </td>
                  <td>${item.price}</td>
                  <th>
                    <button onClick={() => handelDelete(item._id)} className="btn btn-ghost btn-xs">
                        <FaTrash className="text-red-600 text-2xl"></FaTrash>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
