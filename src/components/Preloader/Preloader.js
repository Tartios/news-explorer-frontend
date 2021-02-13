import React from 'react';
import './preloader.css';

export default function Preloader() {
  const [view, setView] = React.useState(false);
  setTimeout(() => {
    setView(true);
  }, 5000);

  const isView = `${view ? 'circle-preloader-false' : ''}`;
  return (
    <div className={`${isView}`}>
      <i className='circle-preloader'></i>
      <p className='circle-preloader__text'>Идет поиск новостей...</p>
    </div>
  );
}
