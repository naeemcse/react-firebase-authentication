import React, {useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {logInWithEmailAndPassword,singInWithGoogle} from "../firebase.js";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await logInWithEmailAndPassword(email, password);
        console.log(user);
        navigate("/");
    }

    const handleSocialLogIn = () => {
        singInWithGoogle().then((user) => {
            console.log(user);
            navigate("/");
        }).catch((error) => {
            console.log(error);
        });

    }

    return (
        <div className="flex flex-col justify-center items-center ">
            <h1 className="text-3xl  my-4">
                Log In
            </h1>
            <form className={"flex flex-col gap-10 text-lg p-1"}>
                <div className="flex gap-10">
                    <label htmlFor="email">Email</label>
                    <input className="border border-black rounded-md" type="email" id="email" name="email"
                           onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email Address"/>

                </div>
                <div className="flex gap-10">
                    <label htmlFor="password">Password</label>
                    <input className="border border-black rounded-md" type="password" id="password" name="password"
                           onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password"/>
                </div>
                <button className="bg-cyan-300 " type="submit" onClick={handleSubmit}> Log In</button>
            </form>

            <button className="bg-blue-300 " type="button" onClick={handleSocialLogIn}> Log In with Gogle </button>

            <p>
                No account? Register <NavLink to="/register" className="text-blue-500">Register</NavLink>
            </p>
            <p>
                Forget Password ? Reset password <NavLink to="/reset" className="text-blue-500">Reset</NavLink>
            </p>

        </div>
    );
};

export default Login;