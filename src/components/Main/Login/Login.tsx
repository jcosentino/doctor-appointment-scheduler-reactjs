import React, { useState } from 'react';
import './Login.scss';
import axios from 'axios';
import querystring from 'querystring';
import Home from '../Home/Home';
import ReactDOM from 'react-dom';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useState('');
    const config = {
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
    }

    async function authenticate() {
        try {
            const res = await axios.post(`http://localhost:5000/authenticate`, 
                querystring.stringify({ username, password }), config);
                setAuth(res.data);
        } catch(err) {
            setAuth(err);
        }
    }

    function logout(): void {
        if(sessionStorage.getItem(username) === 'true'){
            window.confirm('Are you sure you want to log out?') === true 
                ? sessionStorage.removeItem(username) : console.log('cancelled');
        }
    }

    function resetLoginBoxes(){
        setUsername('');
        setPassword('');
    }

    function handleSubmit(event: any): void {
        event.preventDefault();
        // check if logged in
        if(sessionStorage.getItem(username) === 'true'){
            alert(`${username} is already logged in!`);
        }
        if(sessionStorage.getItem(username) === null){
            alert('Username and / or password is incorrect!');
            resetLoginBoxes();
        }
        authenticate();
        if(auth === 'Authentication succeeded!'){
            sessionStorage.setItem(username, 'true');
            alert(`${username} is now logged in!`);
            ReactDOM.render(< Home />, document.getElementById('Main'));
        }
    }

    return (
        <div className='Login'>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                            type='text'
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    Password:
                    <input
                            type='text'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                    />
                </label>
                <input type='submit' value='Login' />
            </form>
            <button className='log-button'
                    onClick={logout}>Log Out</button>
        </div>
    );
}

export default Login;
