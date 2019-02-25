import React, { Component } from 'react';
import './signup.css';
import axios from 'axios';

class Signup extends Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: '',
			email: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.clearInputs = this.clearInputs.bind(this);
	}

	clearInputs(){
		const inputs = document.getElementsByTagName('input');
		for(let inp of inputs){
			if(inp.type !== 'submit'){
				inp.value = '';
			}
		}
	}

	handleChange(event){
		event.preventDefault();
		this.setState({[event.target.name]: event.target.value});
	}

	handleSubmit(event){
		event.preventDefault();
		axios.post(`http://localhost:5000/registerUser`, 
			{
				'username': this.state.username,
				'password': this.state.password,
				'email': this.state.email
			})
			 .then(res => {
			 	alert(res.data);
			 	this.clearInputs();
			 })
			 .catch((err) => {
			 	alert(err);
			 });
	}

	render(){
		return (
			<div className='signup'>
				<form onSubmit={this.handleSubmit}>
					<label>
						Username
						<input type='text' name='username' 
							   value={this.state.username}
							   onChange={this.handleChange}/><br/>
					</label>
					<label>
						Password
						<input type='password' name='password' 
							   value={this.state.password} 
							   onChange={this.handleChange}/><br/>
					</label>
					<label>
						Email
						<input type='text' name='email' 
							   value={this.state.email}
							   onChange={this.handleChange}/><br/>
					</label>
					<input type='submit' value='Submit' /><br/>
				</form>
			</div>
		);
	}
}

export default Signup;