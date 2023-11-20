import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Home/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Secret from "../pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Contact from "../pages/Home/Contact/Contact";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./adminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateMenu from "../pages/Dashboard/UpdateMenu.jsx/UpdateMenu";
import Payment from "../pages/Dashboard/Payment/Payment";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";


const router = createBrowserRouter([
    {
        path: '/', 
        element: <Main></Main>, 
        children: [
            {
                path: '/', 
                element: <Home></Home>
            }, 
            {
                path: '/menu', 
                element: <Menu></Menu>
            },
            {
                path: '/order/:category', 
                element: <Order></Order>
            }, 
            {
                path: '/login', 
                element: <Login></Login>
            }, 
            {
                path: '/register', 
                element: <Register></Register>
            }, 
            {
                path: '/secret',
                element: <PrivateRoute>
                                <Secret></Secret>
                         </PrivateRoute>
            }, 
            {
                path: '/contact', 
                element: <Contact></Contact>
            }
        ]
    }, 
    {
        path: '/dashboard', 
        element: <PrivateRoute>
                        <Dashboard></Dashboard>
                </PrivateRoute>, 
        children: [
            {
                path: 'userHome',  
                element: <UserHome></UserHome>           
            },
            {
                path: 'cart', 
                element: <Cart></Cart>
            }, 
            {
                path: 'payment', 
                element: <Payment></Payment>
            },

            /// admin routes
            {
                path: 'users', 
                element: <AllUsers></AllUsers>             
            }, 
            {
                path: 'adminHome', 
                element: <AdminHome></AdminHome>
            },
            {
                path: 'addItems', 
                element: <AddItems></AddItems>      
            }, 
            {
                path: 'manageItems', 
                element: <ManageItems></ManageItems>
            }, 
            {
                path: 'updateMenu/:id', 
                element: <UpdateMenu></UpdateMenu>, 
                loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
            }, 

        ]
    }

])

export default router; 