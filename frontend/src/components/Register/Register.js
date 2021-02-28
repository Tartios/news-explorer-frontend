import React from 'react';
import { useFormWithValidation } from '../FormValidation/FormValidation';

export default function Register({
  handleRegister, isOpen, onClose, openSignIn,
}) {
  // const { values, handleChange, setValues } = useForm();
  const {
    values, handleChange, errors, isValid, resetForm,
  } = useFormWithValidation();
  // const [data, setData] = React.useState({
  //   name: '',
  //   email: '',
  //   password: '',
  // });
  // const [errors, setErrors] = React.useState(null);
  // const [isValid, setIsValid] = React.useState(false);
  // const [passwordError, setPasswordError] = React.useState(null);
  // const [nameError, setNameError] = React.useState(null);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setData({
  //     ...data,
  //     [name]: value,
  //   });

  //   // console.log(e.target.name);
  //   // switch (name) {
  //   //   case 'email':
  //   //     // eslint-disable-next-line no-case-declarations
  //   //     const emailIsValid = /^.+@.+\..+$/igm;
  //   //     if (!emailIsValid.test(String(value).toLowerCase())) {
  //   //       setErrors('некорректный email');
  //   //       console.log(errors);
  //   //     } else {
  //   //       setErrors(null);
  //   //     }
  //   //     // break;
  //   //   case 'password':
  //   //     if (value < 8) {
  //   //       setPasswordError('Длина пароля должна быть не менее 8-ми символов');
  //   //       console.log(errors);
  //   //     } else {
  //   //       setPasswordError(null);
  //   //     }
  //   //     // break;
  //   //   case 'name':
  //   //     if (value < 2) {
  //   //       setNameError('Длина имени должна быть не менее 2-х символов');
  //   //       console.log(errors);
  //   //     }
  //   //     if (value > 30) {
  //   //       setNameError('Максимальная длина имени 30 символов');
  //   //     } else {
  //   //       setNameError(null);
  //   //     }
  //   //     // break;
  //   //   default:
  //   //     setIsValid(true);
  //   // }
  //   // console.log(errors);
  // };

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
    <button type='submit' className='popup__save-button' disabled={isValid}>Зарегистрироваться</button>
      </form>
      <p className='popup__message'>или <a className='popup__redirect' onClick={openSignIn}>Войти</a></p>
    </div>
    </div>
  );
}
