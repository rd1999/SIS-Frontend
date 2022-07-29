import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:8181/';
class UserService {
  getUserBoard() {
    return axios.get(API_URL + 'forUser', { headers: authHeader() })
  }
  getAdminBoard() {
    return axios.get(API_URL + 'forAdmin', { headers: authHeader() });
  }
}
export default new UserService();