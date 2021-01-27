import React from 'react';
import './header.css';
import { Link, Route } from 'react-router-dom';

export default function Header() {
  return (
    // тут все кроме лого нужно будет унести в навигацию и перенести туда стили,
    // и развести их по разным краям
    <header className='header'>
        <Route exact path='/'>
            <button className='header__logo'></button>
        </Route>
        <Route>
            <Link className='header__link'>
            Главная
            </Link>
        </Route>
        <Route>
            <Link className='header__link'>
            Сохранённые статьи
            </Link>
        </Route>
        <Route>
            <button className='header__button'>Авторизоваться</button>
        </Route>
        <Route>
            <button className='header__button'>Имя пользователя и значок</button>
        </Route>
    </header>
  );
}
