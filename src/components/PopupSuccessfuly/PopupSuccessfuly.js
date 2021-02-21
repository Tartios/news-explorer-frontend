import React from 'react';
import '../PopupWithForm/popupWithForm.css';
import './PopupSuccessfuly.css';

export default function PopupSuccessfuly({
  name,
  isOpen,
  onClose,
}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_open'} `}>
      <div className='popup__container'>
        <button
          type='button'
          onClick={onClose}
          className='popup__close-button'
        ></button>
        <h3 className='popup__title popup__title_success'>Пользователь успешно зарегистрирован!</h3>
        <a className='popup__success'>Войти</a>
      </div>
    </div>
  );
}
