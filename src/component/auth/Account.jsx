import React, {createContext} from 'react';
import Pool from "../../UserPool";
import {CognitoUser,AuthenticationDetails} from "amazon-cognito-identity-js"


// * use Context to share the data between each component
const AccountContext = createContext();


function Account(props) {

    // * get the info of the Session
    const getSession =async ()=>{
        return await new Promise((resolve,reject)=>{
            const user = Pool.getCurrentUser();
            if(user){
                user.getSession((err,session)=>{
                    if(err){
                        reject();
                    }else {
                        resolve(session)
                    }
                });
            }else {
                reject();
            }
        })
    }


    // * this func to login  Username === Email
    const authenticate = async (Username,Password) =>{
        const user = new CognitoUser({Username,Pool,})

            return await new Promise((resolve,reject)=>{
                const authDetails = new AuthenticationDetails({Username,Password,})

                user.authenticateUser(authDetails,{
                    onSuccess:(data)=>{
                        console.log("onSuccess:",data)
                        resolve(data)
                    },
                    onFailure:(err)=>{
                        console.error("onFailure :",err)
                        reject(err)
                    },
                    newPasswordRequired:(data)=>{
                        console.log("newPasswordRequired :", data)
                        resolve(data)
                    }
                })
            })

    }


    const logout = ()=> {
        const user = Pool.getCurrentUser();
        if(user){
            user.signOut();
        }
    }


    return (
        <AccountContext.Provider value={{authenticate, getSession,logout}}>
            {props.children}
        </AccountContext.Provider>
    );
}

export {Account,AccountContext};