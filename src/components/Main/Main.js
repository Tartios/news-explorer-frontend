import React from 'react';
import './main.css';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import newsCards from '../../NewsCards/newsCards';

export default function Main({ location }) {
  return (
    <main>
        <section className='searchService'>
          <div className='searchService__content'>
            <h1 className='searchService__title'>Что творится в мире?</h1>
            <p className='searchService__text'>Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
            <form className='searchForm'>
              <input className='searchForm__inputBar' placeholder='Введите тему новости'></input>
              <button className='searchForm__button'>Искать</button>
            </form>
          </div>
        </section>
        <NewsCardList cards={newsCards} location={location} />
        <About />
    </main>
  );
}
