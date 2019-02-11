import React, { Component } from 'react';
import './signup.css';

class Signup extends Component {
	render(){
		return (
			<div className='signup'>
				<form action='/signup' method='post'>
					<input type='text' name='email'/><br/>
					<input type='password' name='password'/><br/>
					<input type='submit' value='Submit'/>
				</form>
			</div>
		);
	}
}

export default Signup;