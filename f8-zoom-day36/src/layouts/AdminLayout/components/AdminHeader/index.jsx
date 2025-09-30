import styles from './AdminHeader.module.scss'

function AdminHeader() {
    return <div className={styles.wraper}>
        <header className={styles.topbar}>
              <div className={styles.topbarLeft}>
                <button className={styles.menuBtn}>☰</button>
                <div className={styles.pageTitle}>Overview</div>
              </div>
              <div className={styles.topbarRight}>
                <div className={styles.greeting}>Hi, Admin</div>
                <div className={styles.avatar}></div>
              </div>
            </header>
    </div>
}

export default AdminHeader