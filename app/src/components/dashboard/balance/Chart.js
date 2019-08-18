import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import React, {Component} from 'react';

export default class Chart extends Component {
	render() {

        const data = [{name: 'January', uv: 400, pv: 2400, amt: 2400}, {name: 'Febuary', uv: 300, pv: 100, amt: 2400}, {name: 'January', uv: 100, pv: 2400, amt: 2400}, {name: 'January', uv: 200, pv: 2400, amt: 2400}, {name: 'January', uv: 200, pv: 2400, amt: 2400}];

        const renderLineChart = (
        <LineChart width={700} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
        </LineChart>
        );

		return (
            <div>
                {renderLineChart}
            </div>
		);
	}
}                