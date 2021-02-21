import React from 'react';
import './SavedNews.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import newsCards from '../../NewsCards/newsCards';

export default function SavedNews({ location }) {
  return (
        <div>
          <div className='savedNews'>
            <h3 className='savedNews__title'>Сохранённые статьи</h3>
            <h4 className='savedNews__info'>Грета, у вас 5 сохранённых статей</h4>
            <span className='savedNews__categories-info'>По ключевым словам: </span><span className='savedNews__tags'>Природа, Тайга</span><span> и </span><span className='savedNews__count'>2-м</span><span> другим</span>
          </div>
            <NewsCardList cards={newsCards} location={location} />
        </div>
  );
}
