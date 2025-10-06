import Header from "./components/Header";

import styles from './DefaultLayout.module.scss'
function DefaultLayout() {
    return <div>
        <div className={styles.sticky}></div>
        <Header/>
        Defaut Layout
    </div>
}

export default  DefaultLayout;