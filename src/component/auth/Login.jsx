import React, {useEffect, useState,useContext} from 'react';
import './login.css'
import {Link} from "react-router-dom";
import {AccountContext} from "./Account";


// TODO: if localstorage have token then redirect to the home page

function Login(props) {
    // * prepare the data
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const {authenticate,getSession} = useContext(AccountContext)

    const signInHandler= (e) =>{
        e.preventDefault();
        // * authenticate only
        authenticate(email,password)
            .then(data=>{
                console.log("Logged in!",data)
                props.history.push("/")
            })
            .catch(err=>{
                console.error("Failed to login",err)
            })
    }



 useEffect(()=>{
        getSession()
            .then(session=>{
               if(session){
                   props.history.push("/")
               }
            })
    },[props.history])


    return (
        <div className='login'>
            <Link to="/">
                <img
                    className="login_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>

            <div className="login_container">
                <h1>Sign-In</h1>
                <form action="">
                    <h5>User Name</h5>
                    <input
                        type="email"
                        placeholder="Your Email address"
                        value={email}
                        onChange={e=>{setEmail(e.target.value)}}
                    />

                    <h5>Password: </h5>
                    <input
                        type="password"
                        value={password}
                        onChange={e=>{setPassword(e.target.value)}}
                    />

                    <button
                        type="submit"
                        onClick={signInHandler}
                        className="login_signInButton"
                    >
                        Sign In
                    </button>
                    <p>
                        By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                    </p>

                    <br/>
                    <hr/>

                    <p>Didn't have an account? <Link  to="/register">Register</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Login;
