import React, { Component } from 'react';
import './login.css';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Home from '../Home/home';
import { Link } from 'react-router-dom';

class Login extends Component {
		constructor(props){
		super(props);
		this.state = {
			userid: '',
			username: '',
			password: '',
			email: '',
			createdDate: '',
			lastUpdated: '',
			isadmin: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.getUserData = this.getUserData.bind(this);
		this.getParams = this.getParams.bind(this);
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

	async getUserData(){
		try{
			return (await axios.get(`http://localhost:5000/user/1`)).data;
		} catch(err){
			return(err);
		}
	}

	getParams(obj) {
		const params = new URLSearchParams();
		const keys = Object.keys(obj);
		for(let k of keys){
			params.append(k, obj[k]);
		}
		return params;
	}

	async handleSubmit(event){
		event.preventDefault();
		const config = {
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}

		try{
			const result = (await axios.post(`http://localhost:5000/authenticate`, 
									this.getParams(this.state), config)).data;
			alert(result);
				if(result === 'Authentication succeeded!'){
					const data = await this.getUserData();
			 		ReactDOM.render(<Home userid = {data['userid']} 
			 							  username = {data['username']}/>, 
			 				document.getElementById('mainDiv'));
			 	}
		} catch(err){
			alert(err);
		}
	}

	render(){
		return (
			<div>
				<h1>Login</h1>
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
					<input type='submit' value='Log In' /><br/>
					<p>Click <Link to='/'>here</Link> to go to the homepage.</p>
				</form>
			</div>
		);
	}
}

export default Login;