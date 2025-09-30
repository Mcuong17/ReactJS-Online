
import styles from "./ForgotPassword.module.scss"

function ForgotPassword() {
    return <div className={styles.wrapper}>
        <h1 className={styles.title}>Forgot Password</h1>
        <form action="">
            <div className={styles.inputWrapper}>
                <label htmlFor="userName">Full name</label>
                <input type="text" id="userName" placeholder='Enter first name'/>
            </div>
            <div className={styles.inputWrapper}>
                <label htmlFor="middelName">ID number</label>
                <input type="text" id="middelName" placeholder='Enter middle name'/>
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
                <h2>Send information to: </h2>
                <label htmlFor="phone">Phone no</label>
                <input type="radio" id="phone"/>
                <label htmlFor="email">Email</label>
                <input type="radio" id="email"/>
            </div>
            <div>
               <button className={styles.buttonAdd}>Submit</button>
            </div>
        </form>
    </div>
}

export default ForgotPassword