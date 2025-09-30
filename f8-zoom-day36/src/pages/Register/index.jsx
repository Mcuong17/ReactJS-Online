import {NavLink} from 'react-router'


import styles from "./Register.module.scss"

function Register() {
    return <div className={styles.wrapper}>
        <h1 className={styles.title}>Register</h1>
        <form action="">
            <div className={styles.inputWrapper}>
                <label htmlFor="userName">First name</label>
                <input type="text" id="userName" placeholder='Enter first name'/>
            </div>
            <div className={styles.inputWrapper}>
                <label htmlFor="middelName">Middle name</label>
                <input type="text" id="middelName" placeholder='Enter middle name'/>
            </div>
            <div className={styles.inputWrapper}>
                <label htmlFor="lastName">Last name</label>
                <input type="text" id="lastName" placeholder='Enter last name'/>
            </div>
            <div className={styles.inputWrapper}>
                <label htmlFor="phoneno">Phone number</label>
                <input type="text" id="phoneno" placeholder='Enter phone no'/>
            </div>
            <div className={styles.inputWrapper}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder='Enter email'/>
            </div>
            <div className={`${styles.inputWrapper} ${styles.inputWrapperCheckbox}`}>
                <label htmlFor="password">Autogen password</label>
                <input type="checkbox" id="password"/>
            </div>
            <div>
               <button className={styles.buttonAdd}>Register</button>
            </div>
        </form>
    </div>
}

export default Register