
import styles from './Footer.module.scss'
import { NavLink } from 'react-router'

function Footer() {
    return <div className={styles.footer}>

        <h1 className={styles.title}>Footer Default Layout</h1>
        <div className={styles.wrapperRight}>
            <NavLink to='/contact' className={styles.link}>Contact</NavLink>
            <NavLink to='/privacy' className={styles.link}>Privacy</NavLink>
        </div>
    </div>
}

export default Footer