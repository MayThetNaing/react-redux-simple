import React from 'react';

class Demo2 extends React.Component {
	constructor() {
		super();

		this.state = {
			data : []
		}

		this.setStateHandler = this.setStateHandler.bind(this);
	};

	setStateHandler() {
		var myItemArray = this.state.data;
		var item = "item" + myItemArray.length + ",   ";
		myItemArray.push (item);
		this.setState({data: myItemArray});
	};

	render() {
		return (
			<div>
				<button onClick={this.setStateHandler}>Add Item</button>
				<h4>Item List : {this.state.data}</h4>
			</div>
		);
	}
}

export default Demo2;