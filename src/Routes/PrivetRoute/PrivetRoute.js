import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider/AuthProvider';

const PrivetRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)
    if (loading) return <div className='h-screen grid place-content-center'>
        <progress className="progress w-56"></progress>
    </div>
    if (user?.uid) return children
    return <Navigate state={{ from: location.pathname }} replace to={'/login'} />
};

export default PrivetRoute;