import React, { Component } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';




export default class Example extends Component {

  render() {
  	const { data } = this.props
    return (
    	<ResponsiveContainer width="99%" height={ 300 } >
    		<BarChart
		        data={data}
		        margin={{
		          top: 5, right: 30, left: 20, bottom: 30,
		        }}
		    >
		        <CartesianGrid strokeDasharray="2 2" />
		        <XAxis dataKey="name" />
		        <YAxis />
		        <Tooltip />
		        <Legend />
		        <Bar dataKey="value" fill="#651fff" />
      		</BarChart>
    	</ResponsiveContainer>
      
    );
  }
}
