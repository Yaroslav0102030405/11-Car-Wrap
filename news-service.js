const API_KEY = '2b084a585a6744c9a99186e76694f8db';
const BASE_URL = 'https://newsapi.org/v2';
const options = {
  headers: {
    Authorization: API_KEY,
  },
};

export default class NewsApiService {
  constructor() {
    this.searchQueryInput = '';
    this.page = 1;
  }

  fetchArticles() {
    const url = `${BASE_URL}/everything?q=${this.searchQueryInput}&language=en&pageSize=6&page=${this.page}`;

    return fetch(url, options)
      .then(response => response.json())
      .then(data => {
        this.incrementPage();

        return data.articles;
      });
    // .catch(error => console.log(error));
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQueryInput;
  }

  set query(newQuery) {
    this.searchQueryInput = newQuery;
  }
}
