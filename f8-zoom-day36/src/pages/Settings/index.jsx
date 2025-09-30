
import styles from './Settings.module.scss'

function Settings() {
    return <div className={styles.card}>
        <div className={styles.cardHeader}>
            <div className={styles.cardTitle}>Settings</div>
        </div>
        <div className={styles.settingsContent}>
            <form className={styles.settingsForm}>
                <div className={styles.formGroup}>
                    <label>Username</label>
                    <input type="text" placeholder="Enter username" />
                </div>
                <div className={styles.formGroup}>
                    <label>Email</label>
                    <input type="email" placeholder="Enter email" />
                </div>
                <div className={styles.formGroup}>
                    <label>Password</label>
                    <input type="password" placeholder="Enter new password" />
                </div>
                <div className={styles.formGroup}>
                    <label>Theme</label>
                    <select>
                        <option>Light</option>
                        <option>Dark</option>
                    </select>
                </div>
                <button type="submit" className={styles.saveBtn}>Save changes</button>
            </form>
        </div>
    </div>
}

export default Settings