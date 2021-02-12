import React from 'react';
import { Route, Link } from 'react-router-dom';
import './footer.css';
import gitIcon from '../../images/github.svg';
import fbIcon from '../../images/fb.svg';

export default function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__copyright'>&#169; 2020 Supersite, Powered by News API</p>
      <nav className='footer__navBar'>
        <Route>
          <Link className='footer__link' to='/'>Главная</Link>
        </Route>
        <a href='https://praktikum.yandex.ru/' className='footer__link'>Яндекс.Практикум</a>
        <div className='footer_social'>
            <a className='footer__link'><img src={gitIcon} className='footer__img'></img></a>
            <a className='footer__link'><img src={fbIcon} className='footer__img'></img></a>
        </div>
      </nav>
    </footer>
  );
}
