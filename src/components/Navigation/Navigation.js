import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import exit from '../../images/exit.svg';

export default function Navigation({ onSignIn, location, openNav }) {
  const navIsOpen = `${openNav ? 'nav_visible' : ''}`;
  return (
    <nav className={`nav ${navIsOpen}`}>
            <NavLink className={location.pathname === '/' ? 'nav__link' : 'nav__link_alternative'} activeClassName='nav__link_active' to='/'>
            <p className='nav__link-name' >Главная</p>
            </NavLink>
            <NavLink className={location.pathname === '/' ? 'nav__link' : 'nav__link_alternative'} activeClassName='nav__link_active-save' to='/saved-news'>
            {location.pathname === '/saved-news' ? <p className='nav__link-name'>Сохранённые статьи</p> : ''}
            </NavLink>
            {location.pathname === '/' ? <button className='nav__button' onClick={onSignIn}>Авторизоваться</button> : <button className='nav__button_authorization'>Грета <img className='nav__exit-button' src={exit} alt='выйти' /></button>}
    </nav>
  );
}
