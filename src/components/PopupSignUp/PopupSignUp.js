import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function PopupSignUp({ isOpen, onClose }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <PopupWithForm
      title="Регистрация"
      name="signUp"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Зарегистрироваться"
      onSubmit={handleSubmit}
      linkText={'Войти'}
    >
      <h4 className='popup__input-title'>Email</h4>
      <input
        name="email"
        type="text"
        id="email-input"
        className="popup__input popup__input_name"
        placeholder='Введите почту'
        required
      />
      <span id="email-input-error" className="popup__input-error"></span>
      <h4 className='popup__input-title'>Пароль</h4>
      <input
        name="password"
        type="text"
        id="password-input"
        className="popup__input popup__input_prof"
        placeholder='Введите пароль'
        required
      />
      <span id="password-input-error" className="popup__input-error"></span>
      <h4 className='popup__input-title'>Имя</h4>
      <input
        name="name"
        type="text"
        id="name-input"
        value={''}
        className="popup__input popup__input_prof"
        placeholder='Введите своё имя'
        required
      />
      <span id="name-input-error" className="popup__input-error"></span>
    </PopupWithForm>
  );
}
