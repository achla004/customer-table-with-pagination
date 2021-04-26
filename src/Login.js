import React, { useState } from 'react';
import './Login.css';
import {
    useHistory
} from 'react-router-dom';





export default function Login({ props }) {
    let history = useHistory();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async props => {
        const confirmusername = "achla@payference.com";
        const confirmpassword = "temp1234";
        if (username === confirmusername && password === confirmpassword) {
            history.push(
                "/listing")

        } else {
            alert("Username or password is incorrect");
        }
    }

    return (

        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div style={{ marginTop: 16 }}>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>

    )
}