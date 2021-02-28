const apiKey = 'fdd540095f3b4ed2ba1ca3182cefa157';

class NewsApi {
  constructor(options) {
    this._url = options.url;
  }

  getArticles(keyword) {
    return fetch(`${this._url}q=${keyword}&apiKey=${apiKey}&from=${Date.now}&to=${'2021-02-17'}&pagesize=${100}`, {
      headers: {
        authorization: `${apiKey}`,
      },
      method: 'GET',
      parameters: {
        apiKey: `${apiKey}`,
        q: `${keyword}`,
        from: '17.02.2021',
        to: new Date(),
        pageSize: 100,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error(`Error ${res.status}`));
    });
  }
}

const newsApi = new NewsApi({
  url: 'https://nomoreparties.co/news/v2/everything?',
});

export default newsApi;
