import { useState } from "react";
import clsx from "clsx";
import styles from "./Counter.module.scss"



function Counter() {

    
    const [count, setCount] = useState(0)

     return <div className={styles["wrapper-counter"]}>
                <div className={styles["wrapper-number-counter"]} style={{ borderColor: count > 0 ? '#41aeff' : count < 0 ? '#f66c71' : '#9fc4de' }}>
                    <div className={styles["number-count"]}>{count}</div>
                    <p className={ `${styles['status-text']} ${count > 0 ? 'positive' : count < 0 ? 'negative' : 'zero'}`}>
                        {count > 0 ? 'Positive' : count < 0 ? 'Negative' : 'Equals 0'}
                        {count > 0 && <span class="material-icons">trending_up</span>}
                        {count < 0 && <span class="material-icons">trending_down</span>}
                    </p>

                </div>
                <div className={styles["button-action"]} onClick={() => setCount(0)}>Reset to 0</div>
                <div className={styles["wrapper-button"]}>
                    <div className={styles["button-action"]} onClick={() => setCount(count + 1)}>Increase</div>
                    <div className={styles["button-action"]} onClick={() => setCount(count - 1)}>Minus</div>
                </div>
            </div>
}

export default Counter;