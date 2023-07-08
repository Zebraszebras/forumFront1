import { useState } from "react";
import userModel from "@/models/userModel";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
        await userModel.login(email, password);
      

      // Redirect the user to another page
      // TODO: Add code to redirect the user to a different page using the appropriate navigation mechanism, such as React Router.
    } catch (error) {
      // Handle login error
      console.error("Login failed:", error);
      // TODO: Add code to display error message to the user.
    }
  };

  return (
    <>
      <div>Login page</div>

      <label>
        Email{" "}
        <input
          value={email}
          onInput={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Password{" "}
        <input
          type="password"
          value={password}
          onInput={(event) => setPassword(event.target.value)}
        />{" "}
      </label>
      <button onClick={login}>Login</button>
    </>
  );
};

export default LoginPage;
