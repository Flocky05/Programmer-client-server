import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider/AuthProvider';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) return <div className='h-screen grid place-content-center'>
        <progress className="progress w-56"></progress>
    </div>
    if (user?.uid) return children
    return <Navigate to={'/login'} />
};

export default PrivetRoute;