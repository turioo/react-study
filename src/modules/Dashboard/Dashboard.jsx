import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";


const Dashboard = () => {
    const [name, setName] = useState('')
    const history = useHistory()
    const [token, setToken] = useState(localStorage.getItem('access_token'))
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/auth/me?`, config )
            .then(res => {
                setName(res.data.data.name)
            })
    }, [token]);
    const logOut = () => {
        localStorage.removeItem('access_token')
        history.push('/')
    }
    return (
       <div>
           <div>name: {name}</div>
           <button onClick={ () => logOut()}>Log out</button>
       </div>
    );
}


export default Dashboard;
