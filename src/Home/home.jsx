import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
	constructor(props){
		super(props);
		this.getProfileData = this.getProfileData.bind(this);
	}

	async getProfileData(){
		try{
			return (await axios.get(`http://localhost:5000/profile/${this.props.userid}`)).data;
		} catch(err){
			return(err);
		}
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