import Link from "next/link";
import userModel from "@/models/userModel";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import logo from "../../assets/question.jpg";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState(null);
    useEffect(() => {
        setIsLoggedIn(userModel.loggedIn);
        setUserName(userModel.name);
    });

    const signOut = () => {
        userModel.signOut();
        setIsLoggedIn(userModel.isLoggedIn);
    }

    return (
        <>
            <div className={styles.header}>
                <img className={styles.logo}src={logo.src} alt="Question logo"></img>
                Header
                <ul>
                    <li>
                <Link href="/">Main</Link> </li>
               <li> {isLoggedIn && <Link href="/ask">Ask Question</Link>} </li>
               <li> {!isLoggedIn && <Link href="/login">Login</Link>} </li>
                <li>{!isLoggedIn && <Link href="/signup">Signup</Link>}</li>
               <li className={styles.welcome}> {userName && <label>Welcome, {userName} </label>} </li>
               <li > {isLoggedIn && <button className={styles.signOut} onClick={signOut}>Sign out</button> }</li>
                </ul>
            </div>
        </>
    )
}

export default Header;