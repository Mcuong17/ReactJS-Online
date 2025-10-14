import AppLogo from "../AppLogo";
import MyCourses from "../MyCourses";
import SearchForm from "../SearchForm";
import styles from './Header.module.scss'
function Header() {
    return <div className={styles.wrapper}>
        <AppLogo/>
        <SearchForm/>
        <MyCourses/>
        </div>
}

export default Header;