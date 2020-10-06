import { auth } from './firebase';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push("/");
        })
        .catch(e => alert(e.message));
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            history.push("/");
            alert("User Created Succesfully");
        })
        .catch(e => alert(e.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                        alt="logo" />
            </Link>

            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text" />
                    <h5>Password</h5>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
                    <button type="submit" onClick={login}className="login_signinButton">Sign In</button>
                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button onClick={register}className="login_registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;
