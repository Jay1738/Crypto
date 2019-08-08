import React from 'react';
import './Sidenav.css';
import { Component } from 'react';


export default class Sidenav extends Component {

    render() {
        return (
            <div className="sidenav">
                <ul className="list">
                    <li>Summary</li>
                    <li>Trade</li>
                    <li>News</li>
                    <li>Bot</li>
                    <li>Settings</li>
                </ul>
            </div>
        );
    }
}