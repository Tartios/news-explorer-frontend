import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function EditProfilePopup({ isOpen, onClose }) {
  function handleSubmit(e) {
    e.preventDefault();
  // тут нужно onChange добавить к инпутам добавить стейты и функции их меняющие
  }

  return (
    <PopupWithForm
      title="Вход"
      name="signIn"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Войти"
      onSubmit={handleSubmit}
      linkText={'Зарегистрироваться'}
    >
      <h4 className='popup__input-title'>Email</h4>
      <input
        name="email"
        type="text"
        id="email-input"
        value={''}
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
        value={''}
        className="popup__input popup__input_prof"
        placeholder='Введите пароль'
        required
      />
      <span id="password-input-error" className="popup__input-error"></span>
    </PopupWithForm>
  );
}
