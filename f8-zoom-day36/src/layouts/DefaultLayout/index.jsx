import { Outlet } from "react-router"

import Header from "../components/Header"
import Footer from "./components/Footer"

import styles from './DefaultLayout.module.scss'


function DefaultLayout() {
    return <>
    
        <div className={styles.mainLayout}>
            <Header />
            <div className="containner">
                <Outlet/>
            </div>
            <Footer/>
        </div>
        </>
}

export default DefaultLayout