
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import useAuth from '../Hooks/useAuth';

const AdminRoute = ({children}) => {
    const location = useLocation()
    const [isAdmin, isAdminLoding] = useAdmin()
    const {user, loeading} = useAuth()

    if(loeading || isAdminLoding){
        return <progress className="progress w-56"></progress>
    }
    
    if(user && isAdmin ){
        return children
    }
    return <Navigate state={{from: location}} replace to='/login'></Navigate>
};

export default AdminRoute;