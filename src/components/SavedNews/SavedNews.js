import React, { useContext } from 'react';
import './SavedNews.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import ArticlesArray from '../contexts/ArticleContext';
import UserData from '../contexts/UserContext';

export default function SavedNews({
  location,
  isLogged,
  toSaved,
  deleteArticle,
}) {
  const articles = useContext(ArticlesArray);
  const userName = useContext(UserData);

  function currentArticles(articlesArray) {
    const arrLength = articlesArray.length;
    return arrLength;
  }

  const counter = articles.reduce((sum, item) => {
    const i = sum;
    if (!i[item.keyword]) {
      i[item.keyword] = 1;
      return i;
    }
    i[item.keyword] += 1;
    return i;
  }, {});
  const sortingCategoriesArray = Object.keys(counter).sort((a, b) => counter[b] - counter[a]).toString().split(',');
  const categories = (categoriesArr) => {
    if (categoriesArr.length === 3) {
      return `${categoriesArr[0]}, ${categoriesArr[1]}, ${categoriesArr[2]}`;
    }
    if (categoriesArr.length === 1) {
      return `${categoriesArr[0]}`;
    }
    return `${categoriesArr[0]}, ${categoriesArr[1]}`;
  };

  const otherCategories = (categoriesArr) => {
    if (categoriesArr.length < 4) {
      return null;
    }
    return <span><span> и </span><span className='savedNews__count'>{categoriesArr.length - 2}-м другим</span></span>;
  };

  return (
        <div>
          <div className='savedNews'>
            <h3 className='savedNews__title'>Сохранённые статьи</h3>
            <h4 className='savedNews__info'>{userName.name}, у вас {currentArticles(articles)} сохранённых статей</h4>
            <span className='savedNews__categories-info'>По ключевым словам: </span><span className='savedNews__tags'>{categories(sortingCategoriesArray)}</span>{otherCategories(sortingCategoriesArray)}
          </div>
            {articles.length > 0 ? <NewsCardList cards={articles} location={location} isLogged={isLogged} toSaved={toSaved} deleteArticle={deleteArticle} /> : null }
        </div>
  );
}
