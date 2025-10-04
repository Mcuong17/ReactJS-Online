import {NavLink} from 'react-router'


import styles from "./Login.module.scss"

function Login() {
    return <div className={styles.wrapper}>
        <h1 className={styles.title}>Login</h1>
        <form action="">
            <div className={styles.inputWrapper}>
                <label htmlFor="userName">User name</label>
                <input type="text" id="userName" placeholder='Enter user name'/>
            </div>
            <div className={styles.inputWrapper}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder='Enter password'/>
            </div>
            <div>
               <NavLink to="/register" className={styles.linkRegister}>Register?</NavLink>
               <button className={styles.buttonAdd}>
                <NavLink to="/admin" className={styles.linkRegister}>Login</NavLink>
               </button>
            </div>
        </form>
    </div>
}

export default Login