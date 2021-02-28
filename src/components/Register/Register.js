import React from 'react';
import { useFormWithValidation } from '../FormValidation/FormValidation';

export default function Register({
  handleRegister, isOpen, onClose, openSignIn,
}) {
  const {
    values, handleChange, errors, isValid, resetForm,
  } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = values;
    handleRegister(name, email, password);
    resetForm();
  };

  function clickOnOverlay(e) {
    if (e.target === document.getElementById('overlay')) {
      onClose();
    }
  }

  return (
    <div onClick={clickOnOverlay} id='overlay' className={`popup ${isOpen && 'popup_open'} `}>
    <div className='popup__container'>
      <button
        type='button'
        onClick={onClose}
        className='popup__close-button'
      ></button>
      <h3 className='popup__title'>Регистрация</h3>{' '}
      <form action='#' className='popup__form' onSubmit={handleSubmit}>
      <h4 className='popup__input-title'>Email</h4>
      <input
        name="email"
        type="email"
        id="email-input"
        onChange={handleChange}
        className="popup__input popup__input_name"
        placeholder='Введите почту'
        required
      />
      <span id="email-input-error" className="popup__input-error">{errors.email}</span>
      <h4 className='popup__input-title'>Пароль</h4>
      <input
        name="password"
        type="password"
        id="password-input"
        onChange={handleChange}
        className="popup__input popup__input_prof"
        placeholder='Введите пароль'
        required
      />
      <span id="password-input-error" className="popup__input-error">{errors.password}</span>
      <h4 className='popup__input-title'>Имя</h4>
      <input
        name="name"
        type="text"
        id="name-input"
        onChange={handleChange}
        className="popup__input popup__input_prof"
        placeholder='Введите своё имя'
        required
      />
      <span id="name-input-error" className="popup__input-error">{errors.name}</span>
    <button type='submit' className='popup__save-button' disabled={!isValid}>Зарегистрироваться</button>
      </form>
      <p className='popup__message'>или <a className='popup__redirect' onClick={openSignIn}>Войти</a></p>
    </div>
    </div>
  );
}
