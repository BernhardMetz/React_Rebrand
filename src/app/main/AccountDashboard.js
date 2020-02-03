import React from 'react';

function AccountDashboard() {
  return (
    <div>
        <head>
            <link href="https://fonts.googleapis.com/css?family=Montserrat:Bold,100,200,300,400,500,600,700,800,900" rel="stylesheet" />
            <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
            <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
            <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
        </head>
        <body>
            <div class="topbar">
                <img class="brand" src="assets/images/logo.png" alt="logo"/>
                
                <div class="member btn">
                    Already A Member?
                </div>
            </div>
            <div class="title">
                Account Dashboard
            </div>
            <div class="container">
                <div class="tabs">
                    <div class="header">
                        <span class="active" id="tab1">Account</span>
                        <span class="" id="tab2">Email</span>
                        <span class="" id="tab3">Billing</span>
                    </div>
                    <div class="content">                 
                        <div class="account active" id="tab1C">
                            <div>
                                Email Address:
                            </div>
                            <div class="smallfont">
                                Current@email.com
                            </div>
                            <div>
                                Discord ID:
                            </div>
                            <div class="smallfont">
                                example#4455
                            </div>
                            <div>
                                Change Password:
                            </div>
                            <input type="text" placeholder="Current Password" />
                            <input type="password" placeholder="New Password" />
                            <input type="password" placeholder="Confirm New Password" />
                            <div class="button_submit btn">
                                Submit
                            </div>
                            <div class="clear">

                            </div>
                        </div>

                        <div class="email" id="tab2C">

                        </div>
                        
                        <div class="billing" id="tab3C">
                            <div style={{marginTop: '30px'}}>
                                Cost for billing period:
                            </div>
                            <div class="price">
                                $45.99
                            </div>
                            <div class="pay_btns">
                                <div class="btn pay_now_btn smallfont">
                                    Pay Now
                                </div>
                                <div>
                                    or*
                                </div>
                                <div class="btn past_due_btn smallfont">
                                    Past Due
                                </div>
                            </div>
                            <div style={{marginTop: '30px'}}>
                                Past Payments:
                            </div>
                            <div class="pay_invocie">
                                <span>$45.99</span>
                                <span>01/26/2020</span>
                                <span>View Receipt</span>
                            </div>
                            <div class="pay_invocie">
                                <span>$45.99</span>
                                <span>01/26/2020</span>
                                <span>View Receipt</span>
                            </div>
                            <div class="pay_invocie">
                                <span>$45.99</span>
                                <span>01/26/2020</span>
                                <span>View Receipt</span>
                            </div>
                            <div class="pay_invocie">
                                <span>$45.99</span>
                                <span>01/26/2020</span>
                                <span>View Receipt</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script src="js/account_dashboard.js"></script>
        </body>
    </div>      
  );
}

export default AccountDashboard;