import Link from "next/link";
import userModel from "@/models/userModel";
import { useState, useEffect } from "react";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => setIsLoggedIn(userModel.loggedIn));

    const signOut = () => {
        userModel.signOut();
        setIsLoggedIn(userModel.isLoggedIn);
    }

    return (
        <>
            <div>
                Header
                <Link href="/">Main</Link>
                {isLoggedIn && <Link href="/myQuestions">My questions</Link>}
                {!isLoggedIn && <Link href="/login">Login</Link>}
                {!isLoggedIn && <Link href="/signup">Signup</Link>}
                {isLoggedIn && <button onClick={signOut}>Sign out</button> }
            </div>
        </>
    )
}

export default Header;