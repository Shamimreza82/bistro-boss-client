import React from "react";
import SectionTitel from "../../../components/SectionTitel";
import useMenu from "../../../Hooks/useMenu";
import { FaEdit, FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";





const ManageItems = () => {
  const [menu, loading, refetch] = useMenu();
    const axiosSecure = useAxiosSecure()
    console.log(menu);

  const handelDeleteItem = (item) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then( async (result) => {
        if (result.isConfirmed) {

          const res = await axiosSecure.delete(`/menu/${item._id}`)
            console.log(res.data);
            refetch()
            if(res.data.deletedCount > 0){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${item.name} has been deleted`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  
            }
       
        }
      });
  }


  const handelManageMenu =(item) => {

  }

  return (
    <div>
      <SectionTitel
        heading={"Manage All items"}
        subHeading={"Hurry Up"}
      ></SectionTitel>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>image</th>
                <th>Items name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                menu.map((item, index) =>
                    <tr key={index}>
                <th>
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
                <td className="text-right">${item.price}</td>
                <th>
                <Link to={`/dashboard/updateMenu/${item._id}`}
                    onClick={() => handelManageMenu(item)}
                    className="btn btn-ghost btn-xs"
                  >
                    <FaEdit className="bg-red-600 p-1 text-white text-2xl"></FaEdit>
                  </Link>
                </th>
                <th>
                <button
                    onClick={() => handelDeleteItem(item)}
                    className="btn btn-ghost btn-xs"
                  >
                    <FaTrash className="text-red-600 text-2xl"></FaTrash>
                  </button>
                </th>
              </tr>
                    )
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
