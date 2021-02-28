import React from 'react';
import './about.css';
import photo from '../../images/author.png';

export default function About() {
  return (
    <section className='about'>
      <img src={photo} alt='тут была аватарка автора, но что-то пошло не так' className='about__photo'></img>
      <div className='about__info'>
        <h2 className='about__title'>Об авторе</h2>
        <p className='about__text'>Это блок с описанием автора проекта. Здесь следует указать, как вас зовут,
          чем вы занимаетесь, какими технологиями разработки владеете.
  Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете
  помочь потенциальным заказчикам.</p>
      </div>
    </section>
  );
}
