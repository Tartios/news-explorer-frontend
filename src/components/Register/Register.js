import React from 'react';

export default function Register({
  handleRegister, isOpen, onClose, openSignIn,
}) {
  const [data, setData] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    console.log(data);
    e.preventDefault();
    const { name, email, password } = data;
    handleRegister(name, email, password);
  };

  function clickOnOverlay(e) {
    if (e.target === document.getElementById('overlay')) {
      onClose();
    }
  }

  // function toLogin() {
  //   onClose();
  //   onSignIn();
  // }

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
        type="text"
        id="email-input"
        onChange={handleChange}
        className="popup__input popup__input_name"
        placeholder='Введите почту'
        required
      />
      <span id="email-input-error" className="popup__input-error"></span>
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
      <span id="password-input-error" className="popup__input-error"></span>
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
      <span id="name-input-error" className="popup__input-error"></span>
    <button type='submit' className='popup__save-button'>Зарегистрироваться</button>
      </form>
      <p className='popup__message'>или <a className='popup__redirect' onClick={openSignIn}>Войти</a></p>
    </div>
    </div>
  );
}
