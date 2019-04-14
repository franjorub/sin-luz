import React, { Component } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'Page A', uv: 4000, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, amt: 2000,
  },
];


export default class Example extends Component {
  render() {
    return (
    	<ResponsiveContainer width="99%" height={ 300 } >
    		<BarChart
		        data={data}
		        margin={{
		          top: 5, right: 30, left: 20, bottom: 30,
		        }}
		    >
		        <CartesianGrid strokeDasharray="3 3" />
		        <XAxis dataKey="name" />
		        <YAxis />
		        <Tooltip />
		        <Legend />
		        <Bar dataKey="uv" fill="#651fff" />
      		</BarChart>
    	</ResponsiveContainer>
      
    );
  }
}
