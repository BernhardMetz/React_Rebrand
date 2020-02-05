import React from 'react';

function Welcome(props) {

    function redirectToLogin(evt) {
        props.history.push('/login')
    }
    
    function redirectToSignUp(evt) {
        props.history.push('/signup')
    }

    return (
        <div>
            <link href="https://fonts.googleapis.com/css?family=Montserrat:Bold,100,200,300,400,500,600,700,800,900" rel="stylesheet" />
            <div className="topbar">
                <img  className="brand" src="assets/images/logo.png" alt="logo"/>
                <div className="member btn" onClick={redirectToLogin}>
                    Already A Member?
                </div>
            </div>
            <div className="container">
                <div className="welcome">
                    <div className="top">
                        <span className="first">Welcome To</span>
                        <span className="second">Beta 3.0</span>
                    </div>
                    <div className="bottom">
                        More options coming soon!
                    </div>
                </div>
                <div className="order">
                    <div className="advanced">
                        ADVANCED
                    </div>
                    <div className="fee">
                        <span className="number">
                            $45.99
                        </span>
                        <span className="duration">
                            Per Month
                        </span>
                        <div className="clear">

                        </div>
                    </div>
                    <div className="line1"></div>
                    <div className="description">
                        <div className="lisence">
                            Full Adobe Creative Cloud Lisence
                        </div>
                        <div className="email">
                            Professional @RebrandDigital.com Email
                        </div>
                        <div className="role">
                            Supporter Role In Discord
                        </div>
                        <div className="feature">
                            More Features Coming Soon
                        </div>
                    </div>
                    <div className="line2"></div>
                    <div className="button_order btn" onClick={redirectToSignUp}>
                        order now
                    </div>
                    <div className="clear">
                    
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="customer_service">
                    CUSTOMER SERVICE
                </div>
                <div className="faq_policy">
                    Account FAQ Terms Of Service Privacy Policy
                </div>
                <div className="copyright">
                    © Inventa LLC
                </div>
            </div>
        </div>      
    );
}

export default Welcome;