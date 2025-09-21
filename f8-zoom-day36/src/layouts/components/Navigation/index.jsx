import { NavLink } from "react-router"

import styles from './Navigation.module.scss'
const navItems = [
    {
        name: "Home",
        to:"/home"
    },
    {
        name: "Login",
        to:"/login"
    },
    {
        name: "Home",
        to:"/home"
    }
]


function Navigation() {
    return <div className={styles.wrapper}>
        {navItems.map((item, index) => <NavLink key={index} to={item.to} className={styles.itemMenu}>{item.name}</NavLink>)}
    </div>
}

export default Navigation