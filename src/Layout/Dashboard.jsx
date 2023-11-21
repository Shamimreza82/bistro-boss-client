
import {
  FaBook,
  FaEnvelope,
  FaHome,
  FaList,
  FaMendeley,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useCarts from "../Hooks/useCarts";

const Dashboard = () => {
  
  const [carts] = useCarts()

  

  /// TODO:
  const [isAdmin] = useAdmin();
  console.log(isAdmin);

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400 p-3">
        <ul className=" flex flex-col gap-3 items-center p-1">
          {isAdmin ? (
            <>
              <li className="flex  items-center p-2  w-full">
                <FaHome></FaHome>
                <NavLink to="/dashboard/adminHome">Admin Home</NavLink>
              </li>
              <li className="flex  items-center p-2  w-full">
                <FaUtensils></FaUtensils>
                <NavLink to="/dashboard/addItems">Add Items</NavLink>
              </li>
              <li className="flex  items-center p-2  w-full">
                <FaList></FaList>
                <NavLink to="/dashboard/manageItems">Manage Items</NavLink>
              </li>
              <li className="flex  items-center p-2  w-full">
                <FaBook></FaBook>
                <NavLink to="/dashboard/manageBookings">Manage Bookings</NavLink>
              </li>
              <li className="flex  items-center p-2  w-full">
                <FaUsers></FaUsers>
                <NavLink to="/dashboard/users">All Users</NavLink>
              </li>
            </>
          ) : (
            <>
                <li className="flex  items-center p-2  w-full">
                <FaHome></FaHome>
                <NavLink to="/dashboard/userHome">User Home</NavLink>
              </li>
              <li className="flex  items-center p-2  w-full">
                <FaUtensils></FaUtensils>
                <NavLink to="/dashboard/reservation">Reservation</NavLink>
              </li>
              <li className="flex  items-center p-2  w-full">
                <FaUtensils></FaUtensils>
                <NavLink to="/dashboard/paymentHistory">Payment History</NavLink>
              </li>
              <li className="flex  items-center p-2  w-full">
                <FaList></FaList>
                <NavLink to="/dashboard/cart">My Cart{carts.length}</NavLink>
              </li>
              <li className="flex  items-center p-2  w-full">
                <FaBook></FaBook>
                <NavLink to="/dashboard/review">Add a review</NavLink>
              </li>
              <li className="flex  items-center p-2  w-full">
                <FaUsers></FaUsers>
                <NavLink to="/dashboard/bookings">My Bookings</NavLink>
              </li>
          </>
          )}

          <div className="divider"></div>

          <li className="flex  items-center p-2 w-full">
            <FaHome></FaHome>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="flex  items-center p-2 w-full">
            <FaMendeley></FaMendeley>
            <NavLink to="/order/salad">Manu</NavLink>
          </li>
          <li className="flex  items-center p-2 w-full">
            <FaEnvelope></FaEnvelope>
            <NavLink to="/order/salad">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
