import React from 'react';
import {useState} from "react";
import { NavLink,useNavigate} from "react-router-dom";
import {registerWithEmailAndPassword} from "../firebase";

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = await registerWithEmailAndPassword(email, password);
        console.log(user);
        navigate("/login");
    }
    return (
        <div className="flex flex-col justify-center items-center ">
        <h1 className="text-3xl  my-4">
            Resister
        </h1>
            <form className={"flex flex-col gap-10 text-lg p-1"}>
                <div className="flex gap-10">
                    <label htmlFor="email">Email</label>
                    <input className="border border-black rounded-md" type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email Address" />

                </div>
                <div className="flex gap-10">
                    <label htmlFor="password">Password</label>
                    <input className="border border-black rounded-md" type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
                </div>
                <button className="bg-cyan-300 " type="submit"  onClick={handleSubmit}> Register </button>
                </form>
<p>
    Already have an account? <NavLink to="/login" className="text-blue-500">Login</NavLink>
</p>

    </div>
    );
};

export default Register;