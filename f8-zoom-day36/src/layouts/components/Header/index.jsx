import styles from "./Header.module.scss"

function Header() {
    return <header className={styles.wrapper}>
        <h1 className={styles.title}> Header component common</h1>
    </header>
}

export default Header