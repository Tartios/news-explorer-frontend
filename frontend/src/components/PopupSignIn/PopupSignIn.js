import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function PopupSignIn({
  isOpen, onClose, handleLogin, onSignUp,
}) {
  const [data, setData] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
      // вот тут я так понимаю лежит не name а name как значение именно поля инпута, name=email например
    });
  };

  const handleSubmit = (e) => {
    console.log(data);
    e.preventDefault();
    const { password, email } = data;
    handleLogin(password, email);
  };

  return (
    <PopupWithForm
      title="Вход"
      name="signIn"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Войти"
      onSubmit={handleSubmit}
      linkText={'Зарегистрироваться'}
      onSignUp={onSignUp}
    >
      <h4 className='popup__input-title'>Email</h4>
      <input
        name="email"
        type="text"
        id="emailInputToLogin"
        onChange={handleChange}
        className="popup__input popup__input_name"
        placeholder='Введите почту'
        required
      />
      <span id="emailInputError" className="popup__input-error"></span>
      <h4 className='popup__input-title'>Пароль</h4>
      <input
        name="password"
        type="text"
        id="passwordInputToLogin"
        onChange={handleChange}
        className="popup__input popup__input_prof"
        placeholder='Введите пароль'
        required
      />
      <span id="passwordInputError" className="popup__input-error"></span>
    </PopupWithForm>
  );
}
