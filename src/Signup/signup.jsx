import React, { Component } from 'react';
import './signup.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
		for(let key of Object.keys(this.state)){
			this.setState({[key]: ''});
		}
	}

	handleChange(event){
		event.preventDefault();
		this.setState({[event.target.name]: event.target.value});
	}

	async handleSubmit(event){
		event.preventDefault();
		const config = {
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}
		const getParams = (obj) => {
			const params = new URLSearchParams();
			const keys = Object.keys(obj);
			for(let k of keys){
				params.append(k, obj[k]);
			}
			return params;
		}
		try{
			const result = (await axios.post(`http://localhost:5000/registerUser`, 
							   getParams(this.state), config)).data;
			alert(result);
			this.clearInputs();
		} catch(err){
			alert(err);
		}
	}

	render(){
		return (
			<div className='signup'>
			<h1>Signup</h1>
				<form onSubmit={this.handleSubmit}>
					<label>
						Username:
						<input type='text' name='username' 
							   value={this.state.username}
							   onChange={this.handleChange}/><br/>
					</label>
					<label>
						Password:
						<input type='password' name='password' 
							   value={this.state.password} 
							   onChange={this.handleChange}/><br/>
					</label>
					<label>
						Email:
						<input type='text' name='email' 
							   value={this.state.email}
							   onChange={this.handleChange}/><br/>
					</label>
					<input type='submit' value='Submit' /><br/>
				</form>
				<p>Have an account? Click <Link to='/login'>here</Link> to login.</p>
			</div>
		);
	}
}

export default Signup;