import React, {useEffect, useState} from 'react';
import './login.css'
import {Link} from "react-router-dom";
import Axios from 'axios'

// TODO: if localstorage have token then redirect to the home page

function Login(props) {
    /*
    !  prepare the data
    */

    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const userInfo=localStorage.getItem("userInfo")

    /*
    !  when sign in success then save user detail to localstorage
    !  other request will attach the token in the header
    */

    const signInHandler= async (e) =>{
        e.preventDefault();
        localStorage.removeItem("userInfo")
        let data_body = new FormData();
        data_body.append("loginname",userName);
        data_body.append("passwordMD5",password);
        const {data,error} = await Axios.post("http://localhost:8080/signin",data_body)
        if (data.code===200){
            localStorage.setItem("userInfo",JSON.stringify(data));
            props.history.push("/")
        }else{
            alert(error)
        }
    }


    useEffect(()=>{
        const userInfo = JSON.parse(localStorage.getItem("userInfo"))
        if(userInfo&&userInfo.code!==200){
            props.history.push("/login")
        }else if(userInfo && userInfo.code===200){
            props.history.push("/")
        }
    },[props.history,userInfo])

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
                    <h5>User Name: </h5>
                    <input
                        type="text"
                        value={userName}
                        onChange={e=>{setUserName(e.target.value)}}
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
