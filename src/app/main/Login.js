import React from 'react';

function Login() {
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
            </div>
            <div class="container">
                <div class="login_form">
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <div class="btn_login">
                        login
                    </div>
                    <div class="forgot_pass btn">
                        Forgot password?
                    </div>
                    <div class="term_condition">
                        <input type="checkbox" />
                        <span>I agree to the terms & conditions</span>
                    </div>
                </div>
            </div>
        </body>
    </div>      
  );
}

export default Login;