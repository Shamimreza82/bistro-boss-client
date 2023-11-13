import React from 'react';
import { FaAd, FaCalendar, FaHome, FaList, FaMendeley, FaShoppingCart } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCarts from '../Hooks/useCarts';

const Dashboard = () => {

    const [cart] = useCarts()
    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-orange-400 p-3'>
                <ul className=' flex flex-col gap-3 items-center p-1'>
                    <li className='flex  items-center p-2  w-full'>
                        <FaHome></FaHome>
                        <NavLink to='/dashboard/userHome'>userHome</NavLink>
                    </li>
                    <li className='flex  items-center p-2  w-full'>
                        <FaCalendar></FaCalendar>
                        <NavLink to='/dashboard/reservation'>Reservation</NavLink>
                    </li>
                    <li className='flex  items-center p-2  w-full'>
                        <FaAd></FaAd>
                        <NavLink to='/dashboard/review'>Add a Review</NavLink>
                    </li>
                    <li className='flex  items-center p-2  w-full'>
                        <FaShoppingCart></FaShoppingCart>
                        <NavLink to='/dashboard/cart'>My Cart ({cart.length})</NavLink>
                    </li>
                    <li className='flex  items-center p-2  w-full'>
                       <FaList></FaList>
                        <NavLink to='/dashboard/bookings'>My Booking</NavLink>
                    </li>


                    <div className="divider"></div> 


                    <li className='flex  items-center p-2 w-full'>
                        <FaHome></FaHome>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li className='flex  items-center p-2 w-full'>
                        <FaMendeley></FaMendeley>
                        <NavLink to='/order/salad'>Manu</NavLink>
                    </li>


                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;