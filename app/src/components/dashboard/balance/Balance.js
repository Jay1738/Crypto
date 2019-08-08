import React from 'react';
import './Balance.css';
import { Component } from 'react';
import Example from './graphs/Achart.js';

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

                </div>
            </div>
            <div className="pie-chart-container">

            </div>
            </div>
        );
    }
}