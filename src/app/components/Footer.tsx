import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h1>BootCamp Dados</h1>
      <div className={styles.social}>
        <Link href="https://www.instagram.com/">
          <Image
            src="/instagram.png"
            alt="instagram"
            height={100}
            width={100}
            className={styles.img}
            style={{ height: "auto", width: "60px", marginTop: "20px" }}
          />
        </Link>

        <Link href="https://youtube.com">
          <Image
            src="/youtube.webp"
            alt="youtube"
            width={100}
            height={100}
            className={styles.img}
            style={{ paddingBottom: "20px" }}
          />
        </Link>

        <Link href="https://www.facebook.com/?locale=pt_BR">
          <Image
            src="/facebook.jpeg"
            alt="facebook"
            height={100}
            width={100}
            className={styles.img}
            style={{ height: "auto", width: "60px", marginTop: "20px" }}
          />
        </Link>
      </div>
      <p>© 2024 - Todos os direitos reservados</p>
    </footer>
  );
}
