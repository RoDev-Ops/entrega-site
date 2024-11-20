import Link from "next/link";
import LoginButton from "./LoginButtonComponent";
import styles from "./Register.module.css";

export default function Register() {
  return (
    <div className={styles.container}>
      <h1 className={styles.Text}>Register</h1>
      <form className={styles.form}>
        <input type="text" placeholder="Email" className={styles.input} />
        <input type="password" placeholder="Senha" className={styles.input} />
        <input
          type="password"
          placeholder="Confirmar Senha"
          className={styles.input}
        />
        <input type="text" placeholder="CPF" className={styles.input} />
        <Link href={"/"}>
          <LoginButton text="Registrar" />
        </Link>
      </form>
    </div>
  );
}
