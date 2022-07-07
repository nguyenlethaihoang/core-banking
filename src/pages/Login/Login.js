import React, {useState} from 'react'
import { Navigate } from 'react-router-dom'
import LoginForm from './LoginForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Login() {
    const adminUser = {
        email: "admin@admin.com",
        password: "123"
    }

    const [user, setUser] = useState({name: "", email: ""})
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if (details.email == adminUser.email && details.password == adminUser.password)
        {
            console.log("Logged in");
            setUser({
                name: details.name,
                email: details.email
            });

        } else {
            console.log("Wrong")
        }
    }

    const Logout = () => {
        console.log("Logout");
    }
    

    return (
        <div className="Login">
            {(user.email != "") ? (
                <div className='welcome'> 
                     <h2>Welcome, <span>{user.name}</span></h2>
                     <button>Logout</button>
                </div>
            ) : (
                <LoginForm Login={Login} error={error}/>
            )}
        </div> 
    )

}

export default Login;