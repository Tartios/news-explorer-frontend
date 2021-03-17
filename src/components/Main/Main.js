import React, { useRef } from 'react';
import './main.css';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
// import newsCards from '../../NewsCards/newsCards';
// import Preloader from '../Preloader/Preloader';

export default function Main({
  location,
  articles,
  getArticles,
  newsLoading,
  isLogged,
  toSaved,
  deleteArticle,
}) {
  const inputValue = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const keyword = inputValue.current.value;
    getArticles(keyword);
  };
  return (
    <main>
        <section className='searchService'>
          <div className='searchService__content'>
            <h1 className='searchService__title'>Что творится в мире?</h1>
            <p className='searchService__text'>Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
            <form className='searchForm'>
              <input className='searchForm__inputBar' placeholder='Введите тему новости' ref={inputValue} required></input>
              <button type='submit' className='searchForm__button' onClick={handleSubmit}>Искать</button>
            </form>
          </div>
        </section>
        <NewsCardList cards={articles} location={location} newsLoading={newsLoading} isLogged={isLogged} toSaved={toSaved} deleteArticle={deleteArticle} />
        <About />
    </main>
  );
}
