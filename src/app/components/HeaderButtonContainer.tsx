import styles from './ButtonHeaderContainer.module.css';
import HeaderButton from './HeaderButtonComponent';
export default function ButtonHeaderContainer() {
    return (
        <div className={styles.container}>
            <HeaderButton url='/cursos' theme="Meus Cursos"/>
            <HeaderButton url='/' theme="Fórum"/>
            <HeaderButton url='/' theme="Promoções"/>
            <HeaderButton url='/whois' theme="Quem Somos"/>
        </div>
    );
}