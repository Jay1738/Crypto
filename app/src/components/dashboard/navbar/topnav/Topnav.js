import React from 'react';
import './Topnav.css';
import { Component } from 'react';
import Logo from './images/logo.png';


export default class Topnav extends Component {

    render() {
        return (
            <div className="topnav">
                <img src={Logo} alt="bitcoin logo"></img>
                <div className="asset-container">
                    <div>
                        Total Assets
                    </div>
                    <div>
                        $11,353.23
                    </div>
                </div>
                <div className="asset-container">
                    <div>
                        Profit
                    </div>
                    <div>
                        +$304.54
                    </div>
                </div>
                <i class="far fa-user-circle fa-3x"></i>
                <div className="asset-container">
                    John Doe
                </div>
                <i class="fas fa-sign-out-alt fa-3x"></i>
            </div>
        );
    }
}