import React from 'react';
import { Route, Link } from 'react-router-dom';
import './footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__copyright'>&#169; 2020 Supersite, Powered by News API</p>
      <nav className='footer__navBar'>
        <Route>
          <Link className='footer__link'>Главная</Link>
        </Route>
        <a href='https://praktikum.yandex.ru/' className='footer__link'>Яндекс.Практикум</a>
        <a className='footer__link'><img src='../../images/github.svg' className='footer__img'></img></a>
        <a className='footer__link'><img src='../../images/fb.svg' className='footer__img'></img></a>
      </nav>
    </footer>
  );
}
