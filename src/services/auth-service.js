import axios from "axios";

const API_URL = "http://localhost:8181/";

class AuthService {
  async login(username, password) {
    const response = await axios
          .post("http://localhost:8181/authenticate", {
              "userName" : username,
              "userPassword" : password
          });
      if (response.data.jwtToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
  }
  logout() {
    localStorage.removeItem("user");
  }
  async register(userName, password, firstName, lastName, id) {
    return await axios.post(API_URL + "registerNewUser", {
      "userName" : userName,
      "userPassword" : password,
      "userFirstName" : firstName,
      "userLastName" : lastName,
      "studId" : id
    });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}
export default new AuthService();