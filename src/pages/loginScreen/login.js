import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../services/auth-thunks";

import './loginPg.css'
import logo_ReMo from '../../images/remo-logo.png';

function Login() {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = async () => {
        try {
            await dispatch(loginThunk({ username, password }));
            navigate("/");
        } catch (e) {
            alert (e);
        }
    };
    return (
        <div>
            <div class="login-background-container">
                <div className="login-container">
                    <p class="opener-style">Please enter your login information</p>
                    <div className="mt-2 un-input-container">
                        <label>Username</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    <div className="mt-2 pw-input-container">
                        <label>Password</label>
                        <input 
                            className="form-control" 
                            type="password" 
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <div className="login-button-container">
                        <button className="btn btn-primary mt-2"
                            onClick={handleLogin}>
                            Log In
                        </button>
                    </div>
                </div>
            </div>
            <div className="power-text-container">
                <p> Powered by </p>
                <img src={logo_ReMo} alt="ReMo logo"/>
            </div>
        </div>
);
}
export default Login;