import styles from './HeaderComponent.module.css';
import Image from 'next/image';
import Link from 'next/link';
import LoginButton from './LoginButtonComponent';

export default function HeaderComponent() {
    return (
        <header className={styles.headers}>
            <Link href="/"> 
                <Image src="/logo.webp" alt="Logo" width={100} height={40} className={styles.logoImg} />
            </Link>
            <input type="text" placeholder="Buscar..." className={styles.searchBar} />
            <Link href="/checkout" className='imageHeader'>
                <Image src="/cart.png" width={100} height={40} alt='cart' className={styles.cartImg} />
            </Link>
            <Link href="/access"><LoginButton text="Acessar" /></Link>
        </header>
    );
}