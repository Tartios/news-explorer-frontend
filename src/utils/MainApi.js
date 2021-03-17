class MainApi {
  constructor(options) {
    this._url = options.url;
  }

  getAppInfo() {
    return Promise.all([this.getSavedArticles(), this.getUserInfo()]);
  }

  // eslint-disable-next-line class-methods-use-this
  _getResponceData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Error ${res.status}`));
  }

  getSavedArticles() {
    return fetch(`${this._url}/articles`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },

      method: 'GET',
    }).then(this._getResponceData);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },

      method: 'GET',
    }).then(this._getResponceData);
  }

  saveArticle({
    keyword, title, text, date, source, link, image,
  }) {
    return fetch(`${this._url}/articles`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },

      method: 'POST',

      body: JSON.stringify({
        keyword, title, text, date, source, link, image,
      }),
    }).then(this._getResponceData);
  }

  deleteArticle(articleId) {
    return fetch(`${this._url}/articles/${articleId}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },

      method: 'DELETE',

      body: JSON.stringify({
        id: articleId,
      }),
    }).then(this._getResponceData);
  }
}

const mainApi = new MainApi({
  url: `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3002'}`,
});

export default mainApi;
