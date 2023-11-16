import { Children } from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = () => {
    const {user, loeading } = useAuth()
    const [isAdmin, isAdminLoding] = useAdmin()
    const location = useLocation()

    if(loeading || isAdminLoding ) {
        return <div> Loading.........</div>
    }

    if(user && isAdmin) {
        return Children; 
    }

    return <Navigate state={{from: location}}  to='/login' replace ></Navigate>
};

export default AdminRoute;