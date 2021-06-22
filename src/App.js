import React, {useState} from 'react';
import { Route, Redirect } from "react-router-dom";
import './App.css';
import Main from "./modules/Main/Main";
import Auth from "./modules/Auth/Auth";
import Dashboard from "./modules/Dashboard/Dashboard";
import Header from "./features/Header/Header";

function App() {
    const [isAuthoriz, setAuthoriz] = useState(localStorage.getItem('access_token'))
    let header = <Header />
    if (isAuthoriz===null) {
        header = null;
    }
    return (
        <div className="app-wrapper">
            <div className="app-wrapper-header">
                {header}
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
