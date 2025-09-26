import { Outlet } from "react-router"

import Header from "../components/Header"
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"

import styles from './DefaultLayout.module.scss'


function DefaultLayout() {
    return <>
    
        <div className={styles.mainLayout}>
            <Header />
            <Navigation/>
            <div className="containner">
                <Outlet/>
            </div>
            <Footer/>
        </div>
        </>
}

export default DefaultLayout