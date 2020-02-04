import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function AccountDashboard() {

    const [tabIndex, setTabIndex] = useState(0)
    const user = useSelector(state => state.user);
    console.log(user)

    function handleTab(evt) {
        if (evt.target.id === 'tab1') {
            setTabIndex(0)
        } else if (evt.target.id === 'tab2') {
            setTabIndex(1)
        } else if (evt.target.id === 'tab3') {
            setTabIndex(2)
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
                            <input type="text" placeholder="First Name" />

                            <div className="mt">
                                Last Name*
                            </div>
                            <input type="text" placeholder="Last Name" />
                            
                            <div className="mt">
                                Discord Id
                            </div>
                            <input type="text" placeholder="User#0001" />
                            
                            <div className="mt">
                                Email*
                            </div>
                            <input type="text" placeholder="Example@Email.Com" />
                            
                            <div className="mt">
                                Password*
                            </div>
                            <input type="password" placeholder="Password" />
                            
                            <div className="mt">
                                Confirm Password*
                            </div>
                            <input type="password" placeholder="Password" />
                            <div className="button_submit btn">
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

export default AccountDashboard;