import styles from "./styles.module.css";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
              
                <ul>
                    <li>
                <Link href="https://edition.cnn.com/">Contacts</Link> </li>
               <li>  <Link href="https://www.delfi.lt/">About us</Link> </li>
               </ul>
            </footer>
        </>
    )
}

export default Footer;