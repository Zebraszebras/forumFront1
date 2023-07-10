import Link from "next/link";
import userModel from "@/models/userModel";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import logo from "../../assets/question.jpg";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    setIsLoggedIn(userModel.loggedIn);
    setUserName(userModel.name);
  });

  const signOut = () => {
    userModel.signOut();
    setIsLoggedIn(userModel.isLoggedIn);
    router.push(`/`);
  };

  return (
    <>
      <div className={styles.header}>
        <img className={styles.logo} src={logo.src} alt="Question logo"></img>

        <ul>
          <li>
            <Link href="/">Main</Link>
          </li>
          {isLoggedIn && (
            <li>
              {" "}
              <Link href="/ask">Ask Question</Link>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <Link href="/login">Login</Link>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <Link href="/signup">Signup</Link>
            </li>
          )}
          {userName && (
            <li className={styles.welcome}>
              {" "}
              <label>Welcome, {userName} </label>
            </li>
          )}

          {isLoggedIn && (
            <li>
              <button className={styles.signOut} onClick={signOut}>
                Sign out
              </button>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Header;
