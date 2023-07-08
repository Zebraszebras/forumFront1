import axios from "axios";

class UserModel {
  loggedIn = false;
  name = null;
  email = null;
  jwt = null;

  constructor() {
    if (typeof window === "undefined") {
      return;
    }

    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
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
    this.name = response.data.name;
    this.email = response.data.email;

    localStorage.setItem(
      "userData",
      JSON.stringify({
        loggedIn: this.loggedIn,
        name: this.name,
        email: this.email,
        jwt: this.jwt,
      })
    );
  }

  async signUp(userName, password) {
    await Promise.resolve();
    console.log("sign up: ", userName, password);
  }

  signOut() {
    localStorage.removeItem("userData");
    this.loggedIn = false;
    this.name = null;
    this.email = null;
    this.jwt = null;
    console.log("Sign out");
  }
}

export default new UserModel();
