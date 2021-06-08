import {SignIn} from "../../features/SignIn/SignIn";
import "./Login.scss"

import React from 'react';

const Auth = () => {
    return (
        <div className="login">
            <div className="login-wrapper">
                <div className="login-wrapper__background">
                    <div id='dots'></div>
                    <div id='dots2'></div>
                    <div id='dots3'></div>
                </div>
                <div className="login-container">
                   <SignIn />
                </div>
            </div>
        </div>
    );
}

export default Auth;
