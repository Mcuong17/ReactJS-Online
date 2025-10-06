import { FaMagnifyingGlass } from "react-icons/fa6";
import Jsbasic from '../../../../assets/images/js_basic.png'
import JsAdvance from '../../../../assets/images/js_basic.png'


import styles from './SearchForm.module.scss'
import { useState } from "react";
import Modal from "../../../../components/Modal";
import { useEffect } from "react";

const data = [
    {
        group: 'Khóa học',
        icon:{Jsbasic},
        name: 'Lâp trình Javascript cơ bản'
    },
    {
        group: 'Khóa học',
        icon:{JsAdvance},
        name: 'Lâp trình Javascript nâng cao'
    }
]

function SearchForm() {
    console.log('data',data)
    const [isOpen, setIsOpen] = useState(false)
    const [searchContent, setSerchContent] = useState('')
    const [searchList, setSearchList] = useState([])


    const handleSearch = (value) => {
        setSerchContent(value)
    }


    useEffect(() => {
        setSearchList((prevState) => {
            return [...prevState, searchContent]
        })
    }, [searchContent])



    return <div className={styles.wrapper}>
        <div className={styles.searchIcon}>
            <FaMagnifyingGlass />
        </div>
        <input
            className={styles.inputSearch}
            type="text"
            placeholder="Tìm kiếm khóa học, bài viết, video,..."
            value={searchContent}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => setIsOpen(true)}
        />




        {isOpen && (
            <Modal isOpen onRequestClose={() => setIsOpen(!isOpen)}>
                <div className={styles.searchFor}>
                    <div className={styles.searchIcon}>
                        <FaMagnifyingGlass />
                    </div>
                    <h3>Kết quả cho ''</h3>
                </div>
            </Modal>
        )}
    </div>
}

export default SearchForm;