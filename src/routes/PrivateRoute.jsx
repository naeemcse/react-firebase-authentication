import React from 'react';

import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../firebase";

import {Outlet,Navigate} from "react-router-dom";


const PrivateRoute = () => {
    const [user,loading,error] = useAuthState(auth);
    if(loading) return <h1>Loading...</h1>
    return (
        <>
            {user ? <Outlet/> : <Navigate to="/login" />}
        </>
    );
};

export default PrivateRoute;