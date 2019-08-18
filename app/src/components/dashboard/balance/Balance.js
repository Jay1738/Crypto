import React from 'react';
import './Balance.css';
import { Component } from 'react';
import Chart from './Chart.js';
import Piechart from './Piechart';


export default class Balance extends Component {

    render() {
        return (
            <div>
            <div className="balance">
                <div className="title" id="balance-title">
                    Balance
                </div>
                <div className="chart-options">
                    <div className="options">Total Balance</div>
                    <div className="options">Profit</div>
                    <div className="options">Daily</div>
                    <div className="options">Weekly</div>
                    <div className="options">Monthly</div>
                </div>
                <div className="chart-1">
                    <Chart/>
                </div>
            </div>
            <div className="pie-chart-container">
                <div className="chart-2">
                <div className="title" id="portfolio">Portfolio</div>
                <Piechart />
                </div>
            </div>
            </div>
        );
    }
}