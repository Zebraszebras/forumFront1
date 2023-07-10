import { useState } from "react";
import userModel from "@/models/userModel";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      await userModel.login(email, password);
      router.push("/");
    } catch (error) {
      console.error("Login failed:", error);
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
