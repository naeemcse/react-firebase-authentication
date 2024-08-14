import React,{useState} from 'react';
import {resetPassword} from "../firebase.js";
import {NavLink} from "react-router-dom";

const Reset = () => {

    const [email, setEmail] = useState("");

    return (
        <div>
            <h1> Reset Page </h1>
            <form className={"flex flex-col gap-10 text-lg p-1"}>
                <div className="flex gap-10">
                    <label htmlFor="email">Email</label>
                    <input className="border border-black rounded-md" type="email" id="email" name="email"
                           onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email Address"/>
                </div>
                <button className="bg-cyan-300 " type="submit" onClick={() => resetPassword(email)}> Reset Password
                </button>
            </form>

            <p> Already have an account ? <NavLink to="/login"> Log In </NavLink></p>
            <p> No Account ? <NavLink to="/register"> Register </NavLink></p>
        </div>
    );
};

export default Reset;