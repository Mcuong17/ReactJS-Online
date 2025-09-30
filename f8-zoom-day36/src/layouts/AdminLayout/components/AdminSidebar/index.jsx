import {NavLink} from 'react-router'

import styles from './AdminSidebar.module.scss'
function AdminSidebar() {
    return <aside className={styles.sidebar}>
              <div className={styles.sidebarHeader}>
                <div className={styles.logo}>My Dashboard</div>
                <p className={styles.subtitle}>Welcome back 👋</p>
              </div>
              <nav>
                <ul className={styles.navList}>
                  <li> <NavLink to='/admin'>Dashboard</NavLink></li>
                <li><NavLink to='/admin/user'>User Management</NavLink></li>
                <li><NavLink to='/admin/settings'>Settings</NavLink></li>
                </ul>
              </nav>
            </aside>
}

export default AdminSidebar