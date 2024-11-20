import Link from "next/link";
import styles from "./ButtonHeaderContainer.module.css";
interface ButtonHeaderContainerProps {
  theme: string;
  url: string;
}

export default function ButtonHeaderContainer({
  theme,
  url,
}: ButtonHeaderContainerProps) {
  return (
    <Link href={url} className={styles.button}>
      <button >{theme}</button>
    </Link>
  );
}
