import React from 'react';
import './header.css';
import { Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

export default function Header({ onSignIn }) {
  return (
    <header className='header'>
        <Route exact path='/'>
            <div>
              <button className='header__logo'></button>
            </div>
        </Route>
        <Navigation onSignIn={onSignIn}/>
    </header>
  );
}
