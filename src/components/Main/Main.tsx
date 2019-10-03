import React from 'react';
import './Main.scss';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Login from './Login/Login';

const Main: React.FC = () => {
    return (
        <>
        <BrowserRouter>
        <div className='Main'>
          <Login />
        </div>
          <Switch>
            <Redirect from="*" to='' />
          </Switch>
        </BrowserRouter>
        </>
      );
}

export default Main;