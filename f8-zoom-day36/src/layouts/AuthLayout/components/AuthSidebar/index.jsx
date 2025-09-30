import {NavLink} from 'react-router'
import styles from './AuthSidebar.module.scss'

const navItems = [
    {
        name: "Login",
        to:"/login"
    },
    {
        name: "Register",
        to:"/register"
    },
    {
        name: "Forgot password",
        to:"/forgotpassword"
    }
]

function AuthSidebar() {
    return <div className={styles.wrapper}>
            <ul className={styles.navItems}>
                {navItems.map((item => (
                    <li key={item.index} className={styles.navItem}>
                        <NavLink to={item.to} className={styles.navlink}>{item.name}</NavLink>
                    </li>
                )))}
            </ul>
         </div>
}

export default AuthSidebar