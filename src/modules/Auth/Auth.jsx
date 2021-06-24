import React, {useEffect, useState} from 'react';
import "./Auth.scss"
import {SignUp} from "../../features/SignUp/SignUp";
import {SignIn} from "../../features/SignIn/SignIn";
import {useSelector} from "react-redux";
import {authcompleted} from "../../features/SignIn/SignInSlice";
import {useHistory} from "react-router-dom";

const Auth = () => {
    const [handler, setHandler] = useState(true)
    const history = useHistory()
    const status = useSelector(authcompleted)
    useEffect(() => {
          if (status == 1) {
              history.push('/dashboard')
          }
        },
        [status])
    const styles = {
        signin : {
            display: handler ? "flex" : "none",
            width: "100%",
            justifyContent:"center"
        },
        signup : {
            display: handler ? "none" : "flex" ,
            width: "100%",
            justifyContent:"center"
        },
        active : {
            color: "#BC181E",
            borderBottom:"2px solid #FFFFFF",
            paddingBottom:"5px"
        },
        hide:{}
    }
    return (
        <div className="login">
            <div className="login-wrapper">
                <div className="login-wrapper__background">
                    <div id='dots'></div>
                    <div id='dots2'></div>
                    <div id='dots3'></div>
                </div>
                <div className="login-container">
                    <div className="choose">
                        <div className="signin" style={ handler ? styles.active : styles.hide} onClick={()=> setHandler(true)}>Sign In</div>
                        <span>/</span>
                        <div className="signup"  style={ !handler ? styles.active : styles.hide} onClick={()=> setHandler(false)}>Sign Up</div>
                    </div>
                    <div style={styles.signin}>
                        <SignIn/>
                    </div>
                    <div style={styles.signup}>
                        <SignUp />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;
