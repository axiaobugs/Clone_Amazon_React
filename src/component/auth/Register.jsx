import React, {useEffect, useState} from 'react';
import './login.css'
import {Link} from "react-router-dom";
import Axios from 'axios'

// TODO: Verify the password

function Login(props) {
    /*
    !  prepare the data
    */

    const [loginName,setLoginName]=useState("");
    const [password,setPassword]=useState("");
    const [rePassword,setRePassword]=useState("");
    const [address,setAddress]=useState("");
    const [nickName,setNickName]=useState("");

    /*
    !  when sign in success then save user detail to localstorage
    !  other request will attach the token in the header
    */

    const registerHandler= async (e) =>{
        e.preventDefault();
        console.log(typeof(password))
        let data_body = new FormData();
        data_body.append("loginName",loginName);
        data_body.append("passwordMd5",password);
        data_body.append("nickName",nickName);
        data_body.append("address",address)
        const {data,error} = await Axios.post("http://localhost:8080/register",data_body)
        if (data.msg===200){
            localStorage.removeItem("userInfo")
            localStorage.setItem("userInfo",JSON.stringify(data));
            props.history.push("/")
        }else{
            alert(error)
        }
    }




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
                <h1>Create a Account</h1>
                <form action="">
                    <h5>User Name</h5>
                    <input
                        type="text"
                        value={loginName}
                        placeholder="your login name"
                        onChange={e=>{setLoginName(e.target.value)}}
                    />

                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={e=>{setPassword(e.target.value)}}
                    />
                    <h5>Re-enter password: </h5>
                    <input
                        type="password"
                        value={rePassword}
                        onChange={e=>{setRePassword(e.target.value)}}
                    />
                    <h5>Address</h5>
                    <input
                        type="text"
                        value={address}
                        placeholder="your default post address"
                        onChange={e=>{setAddress(e.target.value)}}
                    />

                    <h5>Nick Name</h5>
                    <input
                        type="text"
                        value={nickName}
                        placeholder="your default post address"
                        onChange={e=>{setNickName(e.target.value)}}
                    />

                    <button
                        type="submit"
                        onClick={registerHandler}
                        className="login_signInButton"
                    >
                        Create your Amazon account
                    </button>
                    <p>
                        By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.
                    </p>

                    <br/>
                    <hr/>
                    <p>Already have an account? <Link to="/login">Sign In</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Login;
