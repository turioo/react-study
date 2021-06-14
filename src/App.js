import React from 'react';
import { Route, Redirect } from "react-router-dom";
import './App.css';
import Main from "./modules/Main/Main";
import Auth from "./modules/Auth/Auth";
import Dashboard from "./modules/Dashboard/Dashboard";

function App() {
    return (
        <div className="app-wrapper">
            <div className="app-wrapper-content">
                <Route exact path="/" component={() => <Main />} />
                <Route exact path="/auth" component={() => <Auth />} />
                <Route exact path="/dashboard" component={() => <Dashboard />} />
            </div>
        </div>
    );
}

export default App;
