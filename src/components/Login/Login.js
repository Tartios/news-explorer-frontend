import React from 'react';
import { useFormWithValidation } from '../FormValidation/FormValidation';

export default function Login({
  handleLogin, isOpen, onClose, openSignUp,
}) {
  const {
    values, handleChange, errors, isValid, resetForm,
  } = useFormWithValidation();
  // const [data, setData] = React.useState({
  //   email: '',
  //   password: '',
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setData({
  //     ...data,
  //     [name]: value,
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, email } = values;
    handleLogin(password, email);
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
    <h3 className='popup__title'>Вход</h3>{' '}
    <form action='#' className='popup__form' onSubmit={handleSubmit}>
        <h4 className='popup__input-title'>Email</h4>
        <input
          name="email"
          type="email"
          id="emailInputToLogin"
          onChange={handleChange}
          className="popup__input popup__input_name"
          placeholder='Введите почту'
          required
        />
        <span id="emailInputError" className="popup__input-error">{errors.email}</span>
        <h4 className='popup__input-title'>Пароль</h4>
        <input
          name="password"
          type="password"
          id="passwordInputToLogin"
          onChange={handleChange}
          className="popup__input popup__input_prof"
          placeholder='Введите пароль'
          required
        />
        <span id="passwordInputError" className="popup__input-error">{errors.password}</span>
      <button type='submit' className='popup__save-button' disabled={!isValid}>Войти</button>
    </form>
    <p className='popup__message'>или <a className='popup__redirect' onClick={openSignUp}>Зарегистрироваться</a></p>
  </div>
  </div>
  );
}
