"use client";
import styles from "./LoginButtonComponent.module.css";

interface LoginButtonProps {
    text: string;
}

export default function LoginButton({ text }: LoginButtonProps) {
    return (
        <button className={styles.loginButton}>{text}</button>
    );
}