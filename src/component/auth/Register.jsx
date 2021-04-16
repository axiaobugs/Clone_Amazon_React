import React, {useState} from 'react';
import './login.css'
import {Link} from "react-router-dom";
import {CognitoUserAttribute} from "amazon-cognito-identity-js"
import UserPool from "../../UserPool";


// TODO: add the re-enter password and verify these(follow the rule as the Cognito)

function Login(props) {
    // * prepare the data
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [name,setName]=useState("");
    const [address,setAddress]=useState("");
    const [nickName,setNickName]=useState("");

    const registerHandler= async (e) =>{
        e.preventDefault();
        let attributeList = [];
        attributeList.push(new CognitoUserAttribute({Name:'address',Value:address}));
        attributeList.push(new CognitoUserAttribute({Name:'name',Value: name}));
        attributeList.push(new CognitoUserAttribute({Name:'nickname',Value:nickName}));

        UserPool.signUp(
            email,
            password,
            attributeList,
            null,
            (err,data)=>{
            if(err){
                console.warn(err.message)
            }
            // * redirect to the login page when success register
            console.log(data)
            props.history.push("/login")
        })
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
                    <h5>Email</h5>
                    <input
                        type="email"
                        value={email}
                        placeholder="your login name"
                        onChange={e=>{setEmail(e.target.value)}}
                    />

                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={e=>{setPassword(e.target.value)}}
                    />
                    <h5>Name</h5>
                    <input
                        type="text"
                        placeholder="Your real name like:Jhon Allen"
                        value={name}
                        onChange={e=>{setName(e.target.value)}}
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
