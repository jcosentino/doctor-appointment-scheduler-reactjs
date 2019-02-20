import React, { Component } from 'react';
import './signup.css';
import axios from 'axios';

class Signup extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event){
		this.setState({ name: event.target.value });
	}

	handleSubmit(event){
		event.preventDefault(); //What is this?
		const name = {
      		name: this.state.name
    	};
    	// const config = { headers: {  
     //                  'Content-Type': 'application/json',
     //                  'Access-Control-Allow-Origin': '*'}
     //              }
		axios.post(`http://127.0.0.1:5000/signup`, {name})//, config)
		.then(res => {
			console.log(res);
			console.log(res.data);
			alert(this.state.name);
			return true;
		})
		.catch(err => {
			console.log(err);
			alert(err);
		});
	}

	// async handleSubmit(event){
	// 	try{

	// 		event.preventDefault(); //What is this?
	// 		await axios.post(`http://127.0.0.1:5000/signup`, {name: this.state.name});
	// 		alert(this.state.name);
	// 	} catch(err){
	// 		console.log(err);
	// 		alert(err);
	// 	}
	// }

	render(){
		return (
			<div className='signup'>
				<form onSubmit={this.handleSubmit}>
					<input type='text' name='name' onChange={this.handleChange}/><br/>
					<input type='submit' value='Submit'/>
				</form>
			</div>
		);
	}
}

export default Signup;