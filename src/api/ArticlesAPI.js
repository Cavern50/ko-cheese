import API from './APIService';

class ArticlesAPI {
  getCategories = () => API.get('articlesCategories');
  getPosts = (url) => API.get(url);
}

export default new ArticlesAPI();
