import React, { Component } from 'react';
import './App.css';
import Signup from './Signup/signup';
import Login from './Login/login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    	<Router>
			<div className='App' id='mainDiv'>
				<Switch>
					 <Route path='/' exact component={Signup} />
					 <Route path='/login' exact component={Login} />
					{/*future 404 route*/}
				</Switch>
			</div>
      </Router>
    );
  }
}

export default App;
