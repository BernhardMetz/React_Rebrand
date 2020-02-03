import React from 'react';

function Welcome() {
  return (
    <div>
        <head>
            <link href="https://fonts.googleapis.com/css?family=Montserrat:Bold,100,200,300,400,500,600,700,800,900" rel="stylesheet" />
        </head>
        <body>
            <div class="topbar">
                <img  class="brand" src="assets/images/logo.png" alt="logo"/>
                <div class="member btn">
                    Already A Member?
                </div>
            </div>
            <div class="container">
                <div class="welcome">
                    <div class="top">
                        <span class="first">Welcome To</span>
                        <span class="second">Beta 3.0</span>
                    </div>
                    <div class="bottom">
                        More options coming soon!
                    </div>
                </div>
                <div class="order">
                    <div class="advanced">
                        ADVANCED
                    </div>
                    <div class="fee">
                        <span class="number">
                            $45.99
                        </span>
                        <span class="duration">
                            Per Month
                        </span>
                        <div class="clear">

                        </div>
                    </div>
                    <div class="line1"></div>
                    <div class="description">
                        <div class="lisence">
                            Full Adobe Creative Cloud Lisence
                        </div>
                        <div class="email">
                            Professional @RebrandDigital.com Email
                        </div>
                        <div class="role">
                            Supporter Role In Discord
                        </div>
                        <div class="feature">
                            More Features Coming Soon
                        </div>
                    </div>
                    <div class="line2"></div>
                    <div class="button_order btn">
                        order now
                    </div>
                    <div class="clear">
                    
                    </div>
                </div>
            </div>
            <div class="footer">
                <div class="customer_service">
                    CUSTOMER SERVICE
                </div>
                <div class="faq_policy">
                    Account FAQ Terms Of Service Privacy Policy
                </div>
                <div class="copyright">
                    © Inventa LLC
                </div>
            </div>
        </body>
    </div>      
  );
}

export default Welcome;