import React from 'react';
import './Balance.css';
import { Component } from 'react';
import Chart1 from './charts/Chart1';

export default class Balance extends Component {

    render() {
        return (
            <div>
            <div className="balance">
                <div className="title">
                    Balance
                </div>
                <div className="chart-options">
                    <div className="options">Total Balance</div>
                    <div className="options">Profit</div>
                    <div className="options">Daily</div>
                    <div className="options">Weekly</div>
                    <div className="options">Monthly</div>
                </div>
                <div>
                    <Chart1/>
                </div>
            </div>
            <div className="pie-chart-container">

            </div>
            </div>
        );
    }
}