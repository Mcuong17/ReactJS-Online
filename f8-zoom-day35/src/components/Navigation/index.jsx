import { NavLink } from "react-router"
import styles from "./Navigation.module.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const navItem = [
    {
        to: "/",
        title:"Home",
        icon: "<HomeOutlinedIcon/>"
    },
     {
        to: "/news",
        title:"Neww Page",
        icon: ""
    },
    {
        to: "/contact",
        title:"Contact Page",
        icon: ""
    },
    {
        to: "/counter",
        title:"Counter App",
        icon: ""
    },
    {
        to: "/todo",
        title:"Todo List",
         icon: ""
    },
    {
        to: "/profile",
        title:"Profile Card",
         icon: ""
    },
    {
        to: "/product",
        title:"Product List",
         icon: ""
    },
    {
        to: "/comment",
        title:"Comment System",
         icon: ""
    },
    {
        to: "/weather",
        title:"Weather List",
         icon: ""
    },
    {
        to: "/button",
        title:"Button Style",
         icon: ""
    }
]

function Navigation() {
    return <>
        <nav className={styles.navWrapper}>
            <ul>
                {navItem.map((item, index) => 
                    <li key={index} className={styles.navItem}>
                        
                        <NavLink to={item.to} className={({isActive}) => isActive ? styles.active: ''}>{item.title}</NavLink>
                    </li>)
                }
            </ul>
        </nav></>
}

export default Navigation;