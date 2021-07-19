import API from './APIService'

class NewProductsAPI {
  getNewProducts = () => API.get('newProducts');
}

export default new NewProductsAPI();
