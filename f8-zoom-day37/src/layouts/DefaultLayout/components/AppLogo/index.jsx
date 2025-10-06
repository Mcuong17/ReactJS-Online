import logo from '../../../../assets/images/f8-logo.png'
import styles from './AppLogo.module.scss'

import { NavLink } from 'react-router-dom';

function AppLogo() {
    return <div className={styles.logo}>
        <NavLink to='/'>
            <img src={logo} alt="F8" />
        </NavLink>
         <NavLink to='/' className={styles.subTitle}>
           Học lập trình để đi làm
        </NavLink>
    </div>
}

export default AppLogo;