import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
	constructor(props){
		super(props);
<<<<<<< Updated upstream

		this.getProfileData = this.getProfileData.bind(this);
	}

	async getProfileData(){
		try{
			return (await axios.get(`http://localhost:5000/profile/${this.props.userid}`)).data;
		} catch(err){
			return(err);
		}
=======
		this.getUserData = this.getUserData.bind(this);
	}

	getUserData(){
		let dataArr = [];
		for(let o of Object.keys(this.props)){
			dataArr.push(<p>{this.props[o]}</p>);
		}
		return(
			<>
				{dataArr}
			</>
		);
>>>>>>> Stashed changes
	}

	render(){
		return (
			<div>
				<p>You have logged in!!</p>
				{this.getUserData()}
			</div>
		);
	}
}

export default Home;