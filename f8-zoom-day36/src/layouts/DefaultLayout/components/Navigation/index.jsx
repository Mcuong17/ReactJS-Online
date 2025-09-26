import { NavLink } from "react-router"

import styles from './Navigation.module.scss'
const navItems = [
    {
        name: "Home",
        to:"/"
    },
    {
        name: "About",
        to:"/about"
    },
    {
        name: "Post",
        to:"/posts"
    }
]


function Navigation() {
    return (
      <div className={styles.wrapper}>
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className={({ isActive }) =>
              `${styles.itemMenu} ${isActive ? styles.active : ""}`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    );
  }
export default Navigation