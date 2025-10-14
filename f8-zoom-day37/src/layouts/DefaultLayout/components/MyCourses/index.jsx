
import { useState } from 'react';
import Modal from '../../../../components/Modal';
import styles from './MyCourses.module.scss'

function MyCourses() {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className={styles.wrapper}>
            <div onClick={() => setIsOpen(!isOpen)} className={styles.title}> Khóa học của tôi </div>
            {isOpen && (
                <Modal isOpen onRequestClose={() => setIsOpen(!isOpen)} closeTimeMS={3000} bodyOpenClassName="modal-custom-body" shouldCloseOnEsc={false}>
                    <div className={styles.cousesWrapper}>
                        <h2 className={styles.cousesTitle}>Khóa học của tôi</h2>
                        <a  className={styles.cousesViewdetail}href="/">Xem tất cả</a>
                    </div>
                    <div className={styles.cousesList}>
                        <div className={styles.cousesItem}>
                            <div className={styles.cousesImage}></div>
                            <div className={styles.cousesBody}>
                                <h1 className={styles.cousreHead}>Fullstack Web</h1>
                                <h1 className={styles.cousreSub}>Học cách đây 1h</h1>
                                <div className={styles.cousreBar}></div>
                            </div>
                        </div>
                    </div>
                </Modal>   
            )}
        </div>
    )
}

export default MyCourses;