import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';

const data = [
  { name: 'Bitcoin', value: 400 },
  { name: 'Ethereum', value: 300 },
  { name: 'Ripple', value: 200 },
  { name: 'Bitcoin Cash', value: 200 },
  { name: 'Litcoin', value: 100 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#9932CC'];

let renderLabel = function(entry) {
    return entry.name;
}

export default class Piechart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/3Leoa7f4/';

  render() {
    return (
      <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={250}
          cy={200}
          innerRadius={80}
          outerRadius={170}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label={renderLabel}
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        
      </PieChart>
    );
  }
}