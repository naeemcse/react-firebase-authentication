import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import {signOut } from "firebase/auth";
import {NavLink, useNavigate} from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    const logout = ()=> {
        signOut(auth);
        console.log("logged out")
    navigate("/login")
    }
    const [user, loading, error] = useAuthState(auth);
    if(loading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <h1>Error:{error}</h1>
    } if(user) {
     return (
        <div>
    <h1>Home page </h1>
    <span> User is : </span> {user.email}
        <button className="bg-black rounded-md m-1 p-2  text-red-600 text-lg" onClick={logout}>Sign out</button>
        </div>
    );
    }

    return (
        <div>
            <h1>Home page </h1>
            <h1>Not logged in</h1>
            <NavLink to="/login" className="text-blue-500">Login</NavLink>
        </div>
    );
};

export default Home;