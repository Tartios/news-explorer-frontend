import React, { useContext } from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import exit from '../../images/exit.svg';
import exitWhite from '../../images/logout-white.svg';
import UserData from '../contexts/UserContext';

export default function Navigation({
  onSignIn, location, openNav, isLogged, logOut,
}) {
  const navIsOpen = `${openNav ? 'nav_visible' : ''}`;
  const user = useContext(UserData);

  return (
    <nav className={`nav ${navIsOpen}`}>
            <NavLink className={location.pathname === '/' ? 'nav__link' : 'nav__link_alternative'} activeClassName='nav__link_active' to='/'>
            <p className='nav__link-name' >Главная</p>
            </NavLink>
            <NavLink className={location.pathname === '/' ? 'nav__link' : 'nav__link_alternative'} activeClassName='nav__link_active-save' to='/saved-news'>
            {isLogged ? <p className='nav__link-name'>Сохранённые статьи</p> : ''}
            </NavLink>
            {!isLogged ? <button className='nav__button' onClick={onSignIn}>
              Авторизоваться
              </button> : <button className={location.pathname === '/' ? 'nav__button' : 'nav__button_alternative'} onClick={logOut}>
                {user.name} <img className='nav__exit-button' src={location.pathname === '/' ? exitWhite : exit} alt='выйти' />
                </button>}
    </nav>
  );
}
