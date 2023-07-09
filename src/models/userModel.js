import axios from "axios";

class UserModel {
  loggedIn = false;
  id = null;
  name = null;
  email = null;
  jwt = null;

  constructor() {
    if (typeof window === "undefined") {
      return;
    }

    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      this.id = userData.id;
      this.name = userData.name;
      this.email = userData.email;
      this.loggedIn = userData.loggedIn;
      this.jwt = userData.jwt;
    }
  }

  async login(email, password) {
    const response = await axios.post("/user/login", { email, password });

    // Handle successful login
    console.log("Login successful:", response);

    this.loggedIn = true;
    this.jwt = response.data.jwt;
    this.id = response.data.id;
    this.name = response.data.name;
    this.email = response.data.email;

    localStorage.setItem(
      "userData",
      JSON.stringify({
        loggedIn: this.loggedIn,
        id: this.id,
        name: this.name,
        email: this.email,
        jwt: this.jwt,
      })
    );
  }

  async signUp(name, email, password) {
    const response = await axios.post("/user/signup", { name, email, password });

    this.loggedIn = true;
    this.jwt = response.data.jwt;
    this.id = response.data.id;
    this.name = response.data.name;
    this.email = response.data.email;

    localStorage.setItem(
      "userData",
      JSON.stringify({
        loggedIn: this.loggedIn,
        id: this.id,
        name: this.name,
        email: this.email,
        jwt: this.jwt,
      })
    );

    console.log("sign up: ", name, email, password);
  }

  signOut() {
    localStorage.removeItem("userData");
    this.loggedIn = false;
    this.id = null;
    this.name = null;
    this.email = null;
    this.jwt = null;
    console.log("Sign out");
  }
}

export default new UserModel();
