import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {LineChart, Legend, BarChart, Bar, Line, YAxis, CartesianGrid, XAxis, Label, Tooltip} from 'recharts';

/*************************
* Table for Accounts
*************************/
class LineGraphCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title:this.props.title
    }
  }

	createHTML(data) {
		let array = [];
		for (let i = 0; i < data.length; i++) {
			let html_data = [];

			for (let a = 0; a < data[i].previous_totals.length; a++) {
				html_data.push(
					{
						name: data[i].name, uv: data[i].previous_totals[a],
					},
				);
			}

			array.push(<LineChart
				width={400}
				height={400}
				data={html_data}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" interval="preserveEnd" />
					<YAxis interval="preserveEnd" />
					<Legend />
					<Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
					<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
				</LineChart>);
		}
		return array
	}

  render(props) {

    if (this.props.data[0] !== undefined) {
			console.log(this.props.data)
			let html = this.createHTML(this.props.data)
			console.log(html)
	    return (
	      <Card>
	        <Card.Header>Featured</Card.Header>
	        <Card.Body>
	          <Card.Title>Account Graphs</Card.Title>
	            {html}
	          <Button variant="primary">Go somewhere</Button>
	        </Card.Body>
	      </Card>);
			}
			else {
				return (<Card></Card>);
			}
  }
}

export default LineGraphCard;
