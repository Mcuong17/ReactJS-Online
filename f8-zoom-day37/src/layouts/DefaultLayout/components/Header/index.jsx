import AppLogo from "../AppLogo";
import SearchForm from "../SearchForm";
import styles from './Header.module.scss'
function Header() {
    return <div className={styles.wrapper}>
        <AppLogo/>
        <SearchForm/>
        </div>
}

export default Header;