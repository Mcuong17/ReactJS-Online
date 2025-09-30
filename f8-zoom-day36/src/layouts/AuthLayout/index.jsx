import { Outlet } from "react-router"
import AuthSidebar from "./components/AuthSidebar"
import Header from "../components/Header"

import styles from './AuthLayout.module.scss'

function AuthLayout() {
    return <>
    <Header/>
    <div className={styles.loginWrapper}>
        <div className={styles.loginImage}>
            <AuthSidebar className={styles.nav}/>
        </div>
        <div className={styles.loginMain}>
            <Outlet/>
        </div>
    </div>
    </>
}

export default AuthLayout