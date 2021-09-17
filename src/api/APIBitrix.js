import axios from "axios";
import { BASE_API_URL} from "constants.js";

class APIBitrix {
  getData = (url) => axios.get(`${BASE_API_URL}/${url}`).then(res => res.data);
}

export default new APIBitrix();
