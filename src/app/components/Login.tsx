import Link from "next/link";
import styles from "./Login.module.css"
import LoginButton from "./LoginButtonComponent";
export default function Login(){
    return (
        <div className={styles.container}>
            <h1 className={styles.loginText}>Login</h1>
            <input type="email" name="email" className={styles.input} placeholder="Email"/>
            <input type="password" name="email" className={styles.input} placeholder="Senha"/>
            <Link href={"/"}> <LoginButton text="Login" /></Link>
        </div>
    );
}