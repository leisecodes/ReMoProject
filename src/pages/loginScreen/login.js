import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../services/auth-thunks";

function Login() {
    const [ sid, setSid ] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = async () => {
        try {
            await dispatch(loginThunk({ sid }));
            navigate("/profile");
        } catch (e) {
            alert (e);
        }
    };
    return (
        <div>
            <h1>Login</h1>
            <div className="mt-2">
                <label>Student ID</label>
                <input className="form-control" type="number" value= {sid} onChange={(event)=>setSid(event.target.value)}/>
            </div>
            <button className="btn btn-primary mt-2" onClick={handleLogin}>
                Login
                </button>
        </div>
    );

}
export default Login;