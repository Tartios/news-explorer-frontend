import React from 'react';
import './navigation.css';
import { Link, Route } from 'react-router-dom';

export default function Navigation({ onSignIn }) {
  return (
    <nav className='nav'>
        <Route>
            <Link className='nav__link nav__link_active'>
            <p className='nav__link-name'>Главная</p>
            </Link>
        </Route>
        <Route>
            <Link className='nav__link'>
            <p className='nav__link-name'>Сохранённые статьи</p>
            </Link>
        </Route>
        <Route>
            <button className='nav__button' onClick={onSignIn}>Авторизоваться</button>
        </Route>
        {/* <Route>
            <button className='nav__button'>Имя пользователя и значок</button>
        </Route> */}
    </nav>
  );
}
