import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';

export default function SavedNews() {
  return (
        <div>
            <p>Сохранённые статьи</p>
            <h1>Грета, у вас 5 сохранённых статей</h1>
            <h3>По ключевым словам: Природа, Тайга и 2-м другим</h3>
            <NewsCardList />
        </div>
  );
}
