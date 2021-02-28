import React, { useState, useEffect } from 'react';
import './App.css';
import {
  useLocation,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import Main from './components/Main/Main';
import SavedNews from './components/SavedNews/SavedNews';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PopupSuccessfuly from './components/PopupSuccessfuly/PopupSuccessfuly';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import { register, authorize, getContent } from './components/Authentification/auth';
import newsApi from './utils/NewsApi';
import mainApi from './utils/MainApi';
import UserData from './components/contexts/UserContext';
import ArticlesArray from './components/contexts/ArticleContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  const location = useLocation();
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isPopupSuccessfulyOpen, setPopupSuccessfulyOpen] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);

  function getSavedArticles() {
    mainApi
      .getSavedArticles()
      .then((res) => {
        setSavedArticles(res);
      })
      .catch(Error);
  }

  function closeAllPopups() {
    setSignInOpen(false);
    setSignUpOpen(false);
    setPopupSuccessfulyOpen(false);
  }

  function handleSignInOpen() {
    setSignInOpen(true);
  }

  function handleSignUpOpen() {
    setSignUpOpen(true);
  }

  function handleSuccessfulyOpen() {
    closeAllPopups();
    setPopupSuccessfulyOpen(true);
  }

  function escForClosePopups(event) {
    if (event.keyCode === 27) {
      closeAllPopups();
    }
  }

  const history = useHistory();
  const [loggedIn, setLogged] = React.useState(false);
  const [userData, setUserData] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  const handleLogin = (password, email) => {
    authorize(password, email)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          setUserData({
            name: data.name,
          });
          setLogged(true);
          history.push('/');
          closeAllPopups();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('articles');
    setUserData({
      email: '',
      password: '',
    });
    setLogged(false);
  };

  const handleRegister = (name, email, password) => {
    register(name, email, password)
      .then((data) => {
        setUserData({
          name: data.name,
          email: data.email,
          password: data.password,
        });
        setLogged(true);
        history.push('/');
        handleSuccessfulyOpen();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [articlesData, setArticlesData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  function getArticles(keyword) {
    setArticlesData(null);
    setLoading(true);
    newsApi.getArticles(keyword)
      .then((res) => {
        const keywordsForArticles = res.articles.map((article) => {
          const art = article;
          art.keyword = keyword;
          return art;
        });
        const savedArticle = keywordsForArticles.map((item) => {
          let articleSaved = item;
          if (item.url === res.link) {
            articleSaved = res._id;
          }
          return articleSaved;
        });
        setArticlesData(savedArticle);
        localStorage.setItem('articles', JSON.stringify(savedArticle));
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function toLogin() {
    closeAllPopups();
    handleSignInOpen();
  }

  function toSignUp() {
    closeAllPopups();
    handleSignUpOpen();
  }

  function handleSavedArticle({
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
  }) {
    mainApi.saveArticle({
      keyword,
      title,
      text,
      date,
      source,
      link,
      image,
    }).then((res) => {
      savedArticles.push(res);
      const savedArticle = articlesData.map((item) => {
        if (item.url === res.link) {
          // eslint-disable-next-line no-param-reassign
          item._id = res._id;
        }
        return item;
      });
      setSavedArticles(savedArticles);
      setArticlesData(savedArticle);
      localStorage.setItem('articles', JSON.stringify(savedArticle));
    })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDeleteArticle(id) {
    mainApi
      .deleteArticle(id)
      .then(() => {
        const articles = savedArticles.filter((article) => article._id !== id);
        setSavedArticles(articles);
        const articleInStorage = articlesData.map((item) => {
          const i = item;
          if (i._id === id) {
            delete i._id;
            return i;
          }
          return i;
        });
        setArticlesData(articleInStorage);
      });
  }

  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    const articles = localStorage.getItem('articles');
    if (jwt) {
      getContent(jwt)
        .then((res) => {
          if (res) {
            setUserData({
              name: res.name,
              email: res.email,
            });
            setLogged(true);
            history.push('/');
          }
        })
        .catch((err) => console.log(err));
    }
    if (articles) {
      setArticlesData(JSON.parse(articles));
    }
  };

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    mainApi
      .getUserInfo()
      .then((res) => {
        setUserData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getSavedArticles();
  }, []);

  return (
    <div onKeyDown={escForClosePopups} className="App">
      <UserData.Provider value={userData} >
      <ArticlesArray.Provider value={savedArticles} >
      <Register handleRegister={handleRegister} isOpen={isSignUpOpen} onClose={closeAllPopups} openSignIn={toLogin} />
      <Login handleLogin={handleLogin} tokenCheck={tokenCheck} isOpen={isSignInOpen} onClose={closeAllPopups} onSuccessfuly={handleSuccessfulyOpen} openSignUp={toSignUp} />
      <PopupSuccessfuly isOpen={isPopupSuccessfulyOpen} onClose={closeAllPopups} openSignIn={toLogin} />
      <Header isLogged={loggedIn} onSignIn={handleSignInOpen} location={location} logOut={handleLogout} />
      <Switch>
        <Route exact path='/'>
          <Main location={location} isLogged={loggedIn} articles={articlesData} getArticles={getArticles} newsLoading={isLoading} toSaved={handleSavedArticle} deleteArticle={handleDeleteArticle} ></Main>
        </Route>
        <ProtectedRoute
          path='/saved-news'
          isLogged={loggedIn}
          component={SavedNews}
          location={location}
          toSaved={handleSavedArticle}
          deleteArticle={handleDeleteArticle}
        />
      </Switch>
      <Footer/>
      </ArticlesArray.Provider>
      </UserData.Provider>
    </div>
  );
}

export default App;
