import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
				<p>You have logged in!!</p>
				<p>{this.props.userid}</p>
				<p>{this.props.username}</p>
			</div>
		);
	}
}

export default Home;