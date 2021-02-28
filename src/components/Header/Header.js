import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

export default function Header({
  onSignIn, location, isLogged, logOut,
}) {
  const [navState, setNavState] = React.useState(false);
  function handleOpenNav() {
    if (navState) {
      setNavState(false);
    } else {
      setNavState(true);
    }
  }

  const navIsOpen = `${navState ? 'header_background' : ''}`;
  const burgerButtonPush = `${navState ? 'header__burger-button_close' : ''}`;
  return (
    <header className={location.pathname === '/' ? `header ${navIsOpen}` : `header__alternative ${navIsOpen}`}>
        <Link className={location.pathname === '/' ? 'header__logo' : 'header__logo_alternative'} to='/ ' />
        <button className={location.pathname === '/' ? `header__burger-button ${burgerButtonPush}` : `header__burger-button ${burgerButtonPush} header__burger-button-alt`} onClick={handleOpenNav} />
        <Navigation onSignIn={onSignIn} location={location} openNav={navIsOpen} isLogged={isLogged} logOut={logOut} />
    </header>
  );
}
