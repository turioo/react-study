import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";
import './Header.scss'

const Dashboard = () => {
    const history = useHistory()
    const [data, setData]=useState({})
    const sendData = async () => {
        await axios.get(`http://127.0.0.1:8000/api/v1/auth/me?`, {
            headers : {
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            }
        })
            .then(res => {
                setData(res.data.data);
            })
    }
    useEffect(() => {
        setTimeout(() => sendData(), 100)
    }, []);

    const logOut = () => {
        localStorage.removeItem('access_token')
        history.push('/')
    }
    return (
        <div className="header-wrapper">
            <div className="header-container">
                <div className="photo"><img src={data.photo} alt=""/></div>
                <div className="name">{data.name}</div>
                <button onClick={ () => logOut()}>Log out</button>
            </div>
        </div>
    );
}


export default Dashboard;
