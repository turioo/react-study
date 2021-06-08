import "./Main.scss"

import React from 'react';

const Main = () => {
    return (
        <div className="main">
            <div className="main-wrapper">
                <div className="main-wrapper__background">
                    <div id='dots'></div>
                    <div id='dots2'></div>
                    <div id='dots3'></div>
                </div>
                <div className="main-container">
                    <div className="main-container__title">Wishlist of <br /><div className="inside-text"><span>Hexide Digital</span></div></div>
                    <a className="main-container__link" href="/auth">Sign in</a>
                </div>
            </div>
        </div>
    );
}

export default Main;
