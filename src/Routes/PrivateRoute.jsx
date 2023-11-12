import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
        const location = useLocation()
    const {user, loeading} = useContext(AuthContext)

    if(loeading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }

    return <Navigate state={{from: location}} replace to='/login'></Navigate>
};

export default PrivateRoute;