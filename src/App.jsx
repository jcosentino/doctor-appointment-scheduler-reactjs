import React, { Component } from 'react';
import './App.css';
import Signup from './Signup/signup';
import Login from './Login/login';
import Home from './Home/home'; //To be removed late, currently for testing purposes
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    	<Router>
			<div className='App' id='mainDiv'>
				<Switch>
					 <Route path='/' exact component={Signup} />
					 <Route path='/login' exact component={Login} />
					 <Route path='/home' exact component={Home} />
				</Switch>
			</div>
      </Router>
    );
  }
}

export default App;
