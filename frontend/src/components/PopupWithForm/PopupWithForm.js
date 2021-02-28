import React from 'react';
import './popupWithForm.css';

export default function PopupWithForm({
  title,
  name,
  children,
  isOpen,
  onClose,
  buttonText,
  onSubmit,
  linkText,
  onSignUp,
  onSignIn,
}) {
  function click(e) {
    if (e.target === document.getElementById('overlay')) {
      onClose();
    }
  }
  return (
    <div onClick={click} id='overlay' className={`popup popup_type_${name} ${isOpen && 'popup_open'} `}>
      <div className='popup__container'>
        <button
          type='button'
          onClick={onClose}
          className='popup__close-button'
        ></button>
        <h3 className='popup__title'>{title}</h3>{' '}
        <form action='#' className='popup__form' onSubmit={onSubmit}>
          {children}
          <button type='submit' className='popup__save-button'>
            {buttonText}
          </button>
        </form>
        <p className='popup__message'>или <button className='popup__redirect' onClick={`${linkText === 'Зарегистрироваться'} ? ${onSignUp} : ${onSignIn}`}>{linkText}</button></p>
      </div>
    </div>
  );
}
