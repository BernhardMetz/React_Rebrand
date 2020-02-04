import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import * as Actions from '../store/actions'; 
import withReducer from '../store/withReducer';
import reducer from '../store/reducers';

function Login(props) {

    const dispatch = useDispatch();

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    async function handleLogin(evt) {
        const reqUrl = 'http://localhost:3001/api/login'
        let postData = {}
        postData.email = email
        postData.password = password
        try {
            let res = await axios.post(reqUrl, postData)
            if (res.data && res.data.email) {
                dispatch(Actions.setUserData(res.data))
                props.history.push('/accountdashboard')
            } else {
                alert(res.data.message)
            } 
        } catch(err) {
            console.log(err)
            alert("Incorrect email or password")
        }
    }

    function handleEmailChange(evt) {
        setEmail(evt.target.value)
    }

    function handlePassChange(evt) {
        setPassword(evt.target.value)
    }

    return (
        <div>
            <link href="https://fonts.googleapis.com/css?family=Montserrat:Bold,100,200,300,400,500,600,700,800,900" rel="stylesheet" />
            <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
            <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
            <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
            <div className="topbar">
                <img className="brand" src="assets/images/logo.png" alt="logo"/>
            </div>
            <div className="container">
                <div className="login_form">
                    <input type="text" placeholder="Email" onChange={handleEmailChange} />
                    <input type="password" placeholder="Password" onChange={handlePassChange} />
                    <div className="btn_login" onClick={handleLogin}>
                        login
                    </div>
                    <div className="forgot_pass btn">
                        Forgot password?
                    </div>
                    <div className="term_condition">
                        <input type="checkbox" />
                        <span>I agree to the terms & conditions</span>
                    </div>
                </div>
            </div>
        </div>      
    );
}

export default withReducer('Login', reducer)(Login);;