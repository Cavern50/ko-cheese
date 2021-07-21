import API from './APIService'

class DeliveryAPI {
  getDeliveryData = () => API.get('');
}

export default new DeliveryAPI();
