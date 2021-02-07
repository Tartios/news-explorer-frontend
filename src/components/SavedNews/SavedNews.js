import React from 'react';
import './savedNews.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import newsCards from '../../NewsCards/newsCards';

export default function SavedNews() {
  return (
        <div>
          <div className='savedNews'>
            <h3 className='savedNews__title'>Сохранённые статьи</h3>
            <h4 className='savedNews__info'>Грета, у вас 5 сохранённых статей</h4>
            <p className='savedNews__categories-info'>По ключевым словам: Природа, Тайга и 2-м другим</p>
          </div>
            <NewsCardList cards={newsCards} />
        </div>
  );
}
