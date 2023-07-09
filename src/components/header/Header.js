import Link from "next/link";
import userModel from "@/models/userModel";
import { useState, useEffect } from "react";

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
            <div>
                Header
                <Link href="/">Main</Link>
                {isLoggedIn && <Link href="/ask">Ask Question</Link>}
                {!isLoggedIn && <Link href="/login">Login</Link>}
                {!isLoggedIn && <Link href="/signup">Signup</Link>}
                {userName && <label>Welcome, {userName} </label>}
                {isLoggedIn && <button onClick={signOut}>Sign out</button> }
            </div>
        </>
    )
}

export default Header;