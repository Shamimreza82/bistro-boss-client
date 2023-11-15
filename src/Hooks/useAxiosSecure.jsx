import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000', 
 }) 
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {logOut} = useAuth()

    /// interseptor to the requst 
        axiosSecure.interceptors.request.use(function(config){
            const token = localStorage.getItem('access-token')
            config.headers.authorization = `Bearer ${token}`
          return config; 
            
        }, function (error){
            return Promise.reject(error);
        } )


        /// respons 
        axiosSecure.interceptors.response.use( (respons) => {
            return respons
        }, async (error) => {
            const status = error.response.status 
            console.log("status errorrrrrrrrrrrrrrrr", error);
            if(status === 401 || status === 403){
               await logOut(); 
                navigate('/login')
            }
            return Promise.reject();
        })

    return axiosSecure; 
};

export default useAxiosSecure;