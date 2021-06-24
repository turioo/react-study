import React, {useEffect} from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Main from "./modules/Main/Main";
import Auth from "./modules/Auth/Auth";
import Dashboard from "./modules/Dashboard/Dashboard";
import Header from "./features/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {getMeService, selectMe, selectMeStatus} from "./features/Me/Me";


function App() {
    const me = useSelector(selectMe)
    const status = useSelector(selectMeStatus)
    const dispatch = useDispatch()
    const styles = {
        hidden : {
            display:"none"
        },
        show: {
            display:"block"
        }
    }
    useEffect(() => dispatch(getMeService()),[])
    return (
        <div className="app-wrapper">
            <div className="app-wrapper-header" style={status ===0 ? styles.hidden : styles.show}>
                <Header name={me.name} photo={me.photo}/>
            </div>
            <div className="app-wrapper-content">
                <Route exact path="/" component={() => <Main />} />
                <Route exact path="/auth" component={() => <Auth />} />
                <Route exact path="/dashboard" component={() => <Dashboard />} />
            </div>
        </div>
    );
}

export default App;
