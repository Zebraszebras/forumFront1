import { useState } from "react";
import userModel from "@/models/userModel";
import { useRouter } from "next/router";
import styles from "./styles.module.css";

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
      <div className={styles.loginPage}>Login page</div>
      <div className={styles.input}>
        <label>
          Email{" "}
          <input className={styles.email}
            value={email}
            onInput={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Password{" "}
          <input className={styles.password}
            type="password"
            value={password}
            onInput={(event) => setPassword(event.target.value)}
          />{" "}
        </label>
        <div>
          <button className={styles.loginButton} onClick={login}>Login</button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
