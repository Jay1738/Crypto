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
                    <ul>
                        <li>
                            <div>
                                Total Assets
                            </div>
                            <div>
                                $11,353.23
                            </div>
                        </li>

                        <li>
                            <div>
                                Profit
                            </div>
                            <div>
                                +$304.54
                            </div>
                        </li>   

                        <li>
                            <i class="far fa-user-circle fa-3x"></i>
                        </li>  

                        <li>
                            <div>
                                John Doe
                            </div>
                        </li>     

                        <li>
                            <i class="fas fa-sign-out-alt fa-3x"></i>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}