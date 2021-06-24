import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import './Header.scss'
import {deleteAuthAccessToken} from "../../utils/services";
import {useDispatch} from "react-redux";
import {setStatusUnAuth} from "../Me/Me";

const Header = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const logOut = () => {
        deleteAuthAccessToken()
        dispatch(setStatusUnAuth())
        history.push('/')
    }
    return (
        <div className="header-wrapper">
            <div className="header-container">
                <div className="photo"><img src={props.photo} alt=""/></div>
                <div className="name">{props.name}</div>
                <button onClick={ () => logOut()}>Log out</button>
            </div>
        </div>
    );
}


export default Header;
