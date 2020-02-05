import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function AccountDashboard(props) {

    const [tabIndex, setTabIndex] = useState(0)
    const user = useSelector(state => state.user)
    const [oldPass, setOldPass] = useState()
    const [newPass, setNewPass] = useState()
    const [newConfirm, setNewConfirm] = useState()

    function handleTab(evt) {
        if (evt.target.id === 'tab1') {
            setTabIndex(0)
        } else if (evt.target.id === 'tab2') {
            setTabIndex(1)
        } else if (evt.target.id === 'tab3') {
            setTabIndex(2)
        }
    }
    function handleOldPassChange(evt) {
        setOldPass(evt.target.value)
    }
    function handleNewPassChange(evt) {
        setNewPass(evt.target.value)
    }
    function handleNewConfirmChange(evt) {
        setNewConfirm(evt.target.value)
    }
    async function handleUpdatePass(evt) {
        if (!oldPass || !newPass || !newConfirm || newPass !== newConfirm) {
            alert("Please check your password carefully!")
            return;
        }
        
        const reqUrl = 'http://localhost:3001/api/user/updatepass'
        let postData = {}
        postData.email = user.email
        postData.password = oldPass
        postData.newpass =newPass
        try {
            let res = await axios.post(reqUrl, postData)
            if (res.data && res.data.email) {
                props.history.push('/login')
                alert("Password has been reset")
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
                <img className="brand" src="assets/images/logo.png" alt="logo"/>
                
                <div className="member btn">
                    Already A Member?
                </div>
            </div>
            <div className="title">
                Account Dashboard
            </div>
            <div className="container">
                <div className="tabs">
                    {tabIndex === 0 &&
                    <div className="header">

                        <span className="active" id="tab1" onClick={handleTab}>Account</span>
                        <span className="" id="tab2" onClick={handleTab}>Email</span>
                        <span className="" id="tab3" onClick={handleTab}>Billing</span>
                    </div>}
                    {tabIndex === 1 &&
                    <div className="header">

                        <span className="" id="tab1" onClick={handleTab}>Account</span>
                        <span className="active" id="tab2" onClick={handleTab}>Email</span>
                        <span className="" id="tab3" onClick={handleTab}>Billing</span>
                    </div>}
                    {tabIndex === 2 &&
                    <div className="header">

                        <span className="" id="tab1" onClick={handleTab}>Account</span>
                        <span className="" id="tab2" onClick={handleTab}>Email</span>
                        <span className="active" id="tab3" onClick={handleTab}>Billing</span>
                    </div>}
                    <div className="content">
                    {tabIndex === 0 &&     
                        <div className="account active" id="tab1C">
                            <div>
                                Email Address:
                            </div>
                            <div className="smallfont">
                                {user.email}
                            </div>
                            <div>
                                Discord ID:
                            </div>
                            <div className="smallfont">
                                {user.discordid}
                            </div>
                            <div>
                                Change Password:
                            </div>
                            <input type="text" placeholder="Current Password" onChange={handleOldPassChange}/>
                            <input type="password" placeholder="New Password" onChange={handleNewPassChange}/>
                            <input type="password" placeholder="Confirm New Password" onChange={handleNewConfirmChange}/>
                            <div className="button_submit btn" onClick={handleUpdatePass}>
                                Submit
                            </div>
                            <div className="clear">

                            </div>
                        </div>}
                    {tabIndex === 1 &&
                        <div className="email active" id="tab2C">

                        </div>}
                    {tabIndex === 2 &&   
                        <div className="billing active" id="tab3C">
                            <div style={{marginTop: '30px'}}>
                                Cost for billing period:
                            </div>
                            <div className="price">
                                $45.99
                            </div>
                            <div className="pay_btns">
                                <div className="btn pay_now_btn smallfont">
                                    Pay Now
                                </div>
                                <div>
                                    or*
                                </div>
                                <div className="btn past_due_btn smallfont">
                                    Past Due
                                </div>
                            </div>
                            <div style={{marginTop: '30px'}}>
                                Past Payments:
                            </div>
                            <div className="pay_invocie">
                                <span>$45.99</span>
                                <span>01/26/2020</span>
                                <span>View Receipt</span>
                            </div>
                            <div className="pay_invocie">
                                <span>$45.99</span>
                                <span>01/26/2020</span>
                                <span>View Receipt</span>
                            </div>
                            <div className="pay_invocie">
                                <span>$45.99</span>
                                <span>01/26/2020</span>
                                <span>View Receipt</span>
                            </div>
                            <div className="pay_invocie">
                                <span>$45.99</span>
                                <span>01/26/2020</span>
                                <span>View Receipt</span>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
            <script src="js/account_dashboard.js"></script>
        </div>      
    );
}

export default AccountDashboard;