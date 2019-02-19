import React, { Component } from 'react';
import './signup.css';
import axios from 'axios';

class Signup extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: ''
		}
	}

	handleChange = (event) => {
		this.setState({ name: event.target.value });
	}

	handleSubmit = async(event) => {
		try{
			event.preventDefault(); //What is this?
			await axios.post(`http://127.0.0.1:5000/signup`, {'name': this.state.name});
		} catch(err){
			console.log(err);
		}
	}

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