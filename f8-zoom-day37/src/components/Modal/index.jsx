import { useEffect } from 'react';
import {clsx} from 'clsx'

import styles from './Modal.module.scss'
import { FaCircleXmark } from "react-icons/fa6";
function Modal({ 
    isOpen = false,
    shouldCloseOnOverlayClick = true,
    shouldCloseOnEsc = true,
    children,
    closeTimeMS = 0,
    overLayClassName,
    className,
    bodyOpenClassName,
    onRequestClose,
 }) {

    const handleRequestClose = () => {
        setTimeout(onRequestClose, closeTimeMS)
    }

    useEffect(() => {
        const handle =  (e) => {
            if(e.code === 'Escape') {
                if(shouldCloseOnEsc) handleRequestClose()
            }
        }

        if(isOpen) {
            document.addEventListener('keyup', handle)
        }
        
        return () => {
             document.removeEventListener('keyup', handle)
        }
    },[isOpen, onRequestClose])

    useEffect(() => {
        document.body.classList.add(bodyOpenClassName)
        return () => {
             document.body.classList.remove(bodyOpenClassName)
        }
    },[bodyOpenClassName])
    

    if(!isOpen) return null;


    return <div className={styles.modal}>
        <div className={clsx(styles.content, className )}>
            <div  className={styles.closeIcon} onClick={handleRequestClose}><FaCircleXmark/></div>
            <div className={styles.body}>
                {children}
            </div>
            <div 
                className={clsx(styles.overlay, overLayClassName)} 
                onClick={() => {
                    if(shouldCloseOnOverlayClick) {
                        handleRequestClose()
                    }
                }}
            />
        </div>
    </div>
}



export default Modal;