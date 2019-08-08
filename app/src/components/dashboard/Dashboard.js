import React from 'react';
import './Dashboard.css';
import { Component } from 'react';
import Topnav from './navbar/topnav/Topnav.js';
import Sidenav from './navbar/sidenav/Sidenav.js';
import Balance from './balance/Balance.js';


export default class Dashboard extends Component {

    render() {
        return (
            <div className="dashboard">
                <Topnav/>
                <Sidenav/>
                <Balance/>
            </div>
        );
    }
}