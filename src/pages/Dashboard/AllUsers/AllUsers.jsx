import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return await res.data;
    },
  });



  const handelDeleteuser = (_id) => {
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
        
        axiosSecure.delete(`/users/${_id}`)
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
  };


  const handelMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res => {
        console.log(res.data);
        if(res.data.modifiedCount > 0 ){
            refetch()
            Swal.fire({
                position: "center",
                icon: "success",
                title: `${user.name} is an Admin Now`,
                showConfirmButton: false,
                timer: 1000
              });
        }
    })
  }

  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All users </h2>
        <h2 className="text-3xl">Total: {users.length} </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, idx) => (
              <tr key={user._Id}>
                <th>{idx + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  { user.role === "admin" ? "Admin" : <button
                    onClick={() => handelMakeAdmin(user)}
                    className="btn btn-ghost btn-xs"
                  >
                    <FaUsers className="bg-red-600 p-1 text-white text-2xl"></FaUsers>
                  </button>}
                </td>
                <td>
                  <button
                    onClick={() => handelDeleteuser(user._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    <FaTrash className="text-red-600 text-2xl"></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
