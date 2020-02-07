import React, { useState } from 'react';
import axios from 'axios';
import BACKEND_URL from './Consts'

function SignUp(props) {

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [discordid, setDiscordId] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirm, setConfirm] = useState()

    function redirectToLogin(evt) {
        props.history.push('/login')
    }
    function redirectToWelcome(evt) {
        props.history.push('/')
    }
    function handleFirstNameChange(evt) {
        setFirstName(evt.target.value)
    }
    function handleLastNameChange(evt) {
        setLastName(evt.target.value)
    }
    function handleDiscordIdChange(evt) {
        setDiscordId(evt.target.value)
    }
    function handleEmailChange(evt) {
        setEmail(evt.target.value)
    }
    function handlePassChange(evt) {
        setPassword(evt.target.value)
    }
    function handleConfirmChange(evt) {
        setConfirm(evt.target.value)
    }
    async function handleSignUp(evt) {
        const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!email || !re.test(String(email).toLowerCase())) {
            alert("Invalid email type! Please check your email.")
            return;
        }

        if (!password || !confirm || password !== confirm) {
            alert("Please check your password carefully!")
            return;
        }
        
        if (!firstName || !lastName) {
            alert("Kindly input your first/last name!")
            return;
        }

        const reqUrl = BACKEND_URL + '/api/user/register'
        let postData = {}
        postData.firstname = firstName
        postData.lastname = lastName
        postData.discordid = discordid
        postData.email = email
        postData.password = password
        try {
            let res = await axios.post(reqUrl, postData)
            if (res.data && res.data.email) {
                props.history.push('/login')
                alert("Successfully registered!")
            } else {
                alert(res.data.message)
            } 
        } catch(err) {
            console.log(err)
            alert("Failed to signup")
        }
    }

    return (
        <div>
            <link href="https://fonts.googleapis.com/css?family=Montserrat:Bold,100,200,300,400,500,600,700,800,900" rel="stylesheet" />
            <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
            <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
            <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
            <div className="topbar">
                <img className="brand" src="assets/images/logo.png" alt="logo" onClick={redirectToWelcome}/>
                
                <div className="member btn" onClick={redirectToLogin}>
                    Already A Member?
                </div>
            </div>
            <div className="signup-title">
                Purchase
            </div>
            <div className="container">
                <div className="tabs">
                    <div className="signup-header">
                        <span className="active">Advanced Membership</span>
                    </div>
                    <div className="signup-content">
                        <div className="account active">
                            <div>
                                First Name*
                            </div>
                            <input type="text" placeholder="First Name" onChange={handleFirstNameChange}/>

                            <div className="mt">
                                Last Name*
                            </div>
                            <input type="text" placeholder="Last Name" onChange={handleLastNameChange}/>
                            
                            <div className="mt">
                                Discord Id
                            </div>
                            <input type="text" placeholder="User#0001" onChange={handleDiscordIdChange}/>
                            
                            <div className="mt">
                                Email*
                            </div>
                            <input type="text" placeholder="Example@Email.Com" onChange={handleEmailChange}/>
                            
                            <div className="mt">
                                Password*
                            </div>
                            <input type="password" placeholder="Password" onChange={handlePassChange}/>
                            
                            <div className="mt">
                                Confirm Password*
                            </div>
                            <input type="password" placeholder="Password" onChange={handleConfirmChange}/>
                            <div className="button_submit btn" onClick={handleSignUp}>
                                Purchase
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
            <script src="js/account_dashboard.js"></script>
        </div>      
    );
}

export default SignUp;