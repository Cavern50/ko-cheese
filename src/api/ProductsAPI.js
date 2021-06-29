import API from './APIService'

class ProductsAPI {
    getProducts = () => API.get('data');
    getProduct = (id) => API.get(`data/${id}`)
    // auth = (username, password) => API.post('/api/auth/token/', {username, password, api: 'operator.up-line'})
    // checkToken = (payload) => API.post('/api/auth/CheckTokenLifeTime', payload)
    // refreshToken = () => API.get('/api/auth/refreshToken')
}

export default new ProductsAPI();
