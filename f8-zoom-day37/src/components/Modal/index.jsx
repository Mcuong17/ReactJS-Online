import { useEffect } from 'react';
import styles from './Modal.module.scss'
import { FaCircleXmark } from "react-icons/fa6";
function Modal({ isOpen = false ,children, onRequestClose }) {

    useEffect(() => {
        const handle =  (e) => {
            if(e.code === 'Escape') {
                onRequestClose()
            }
        }

        if(isOpen) {
            document.addEventListener('keyup', handle)
        }
        
        return () => {
             document.removeEventListener('keyup', handle)
        }
    },[isOpen, onRequestClose])

    if(!isOpen) return null;


    return <div className={styles.modal}>
         <div  className={styles.closeIcon} onClick={onRequestClose}><FaCircleXmark/></div>
        <div className={styles.body}>
            {children}
        </div>
        <div className={styles.overlay} onClick={onRequestClose}/>
    </div>
}



export default Modal;