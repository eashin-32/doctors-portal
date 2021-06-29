import React from 'react';
import firebase from "firebase/app";
import "firebase/auth"
import firebaseConfig from './Firebase.Config'
import banner from '../../../images/Group 140.png'
import './Login.css'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }


const Login = () => {

    var provider = new firebase.auth.GoogleAuthProvider();
   const handleGoogleSubmit = () => {
    
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    
    var token = credential.accessToken;
    
    var user = result.user;
    console.log(result)
  }).catch((error) => {
    
    
  });
   }
    return (
        <div className='row login-page'>
            <div className="col-md-6 d-flex align-content-center justify-content-center login-form">
                <div className='form '>
                   <div className="shadow rounded-1 p-5">
                   <p className="text-center text-secondary h3 mb-4">Login</p>
                    <small>Username</small>
                    <input type="text" className="form-control mb-2" />
                    <small>Password</small>
                    <input type="password" className="form-control mb-1" />
                    <small className='mb-2'><a className='text-danger ' href="/forgotpass">Forgot Your Password</a></small>
                    <button className="btn btn-danger form-control mb-2" onClick={handleGoogleSubmit}>Google</button>
                    <button className="btn btn-info form-control">Submit</button>
                   </div>
                </div>
            </div>
            <div className="col-md-6">
                <img src={banner} alt="" className="img-fluid w-75 p-4" />
            </div>
        </div>
    );
};

export default Login;