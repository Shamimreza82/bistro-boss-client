import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Home/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Secret from "../pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";


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
               
            }
        ]
    }, 

])

export default router; 