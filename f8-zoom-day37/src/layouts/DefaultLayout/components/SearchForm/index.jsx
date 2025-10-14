import { FaMagnifyingGlass } from "react-icons/fa6";
import Jsbasic from '../../../../assets/images/js_basis.png'
import JsAdvance from '../../../../assets/images/js_advance.png'
import JsPro from '../../../../assets/images/js_pro.png'
import New1 from '../../../../assets/images/new_1.jpg'
import New2 from '../../../../assets/images/new_2.png'
import New3 from '../../../../assets/images/new_3.jpg'
import Video1 from '../../../../assets/images/video_1.jpg'
import Video2 from '../../../../assets/images/video_2.jpg'
import Video3 from '../../../../assets/images/video_3.jpg'


import styles from './SearchForm.module.scss'
import { useState } from "react";
import Modal from "../../../../components/Modal";


const data = [
    {
        group: 'Khóa học',
        item: [
            {
                id: 1,
                icon: Jsbasic ,
                name: 'Lâp trình Javascript cơ bản'
            },
            {
                id: 2,
                icon: JsAdvance,
                name: 'Lâp trình Javascript nâng cao'
            },
            {
                id: 3,
                icon: JsPro ,
                name: 'Javascript Pro'
            }
        ]

    },
    {
        group: 'Bài viết',
        item: [
            {
                id: 4,
                icon: New1 ,
                name: 'Không Nên Học Javascript, Liệu Có Đúng Như Vậy?'
            },
            {
                id: 5,
                icon: New2 ,
                name: 'Xử Lý Bất Đồng Bộ Trong Javascript - Phần 1'
            },
            {
                id: 6,
                icon: New3 ,
                name: 'Chuyện  cũ xưa: Nên dùng === hay == để so sánh trong Javascript?'
            }
        ]

    },
    {
        group: 'Video',
        item: [
            {
                id: 7,
                icon:  Video1 ,
                name: 'Giải thích các trường hợp "phi lý" trong JavaScript?'
            },
            {
                id: 8,
                icon: Video2 ,
                name: 'Học Xong" Javascript Có Giải Được "Code Thiếu Nhi"?'
            },
            {
                id: 9,
                icon: Video3 ,
                name: 'Fn.apply() method trong Javascript?'
            }
        ]

    }
]

function SearchForm() {
    const [isOpen, setIsOpen] = useState(false)
    const [searchContent, setSerchContent] = useState('')

    const handleSearch = (value) => {
        setSerchContent(value)
    }


const removeVietnameseTones = (str) => {
    return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d").replace(/Đ/g, "D");
};


const filteredData = data
    .map(group => ({
        ...group,
        item: group.item.filter(course => {
            const search = removeVietnameseTones(searchContent.toLowerCase().trim());
            const name = removeVietnameseTones(course.name.toLowerCase());
            return name.includes(search); 
        })
    }))
    .filter(group => group.item.length > 0);

    return (
        <div className={styles.wrapper}>
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
                        <h3>Kết quả cho '{searchContent}'</h3>
                    </div>

                    <div>
                        {filteredData.length > 0 ? (
                            filteredData.map((courses, index) => (
                                <div key={index} className={styles.contentSearch}>
                                    <div className={styles.lableGroup}>
                                        {courses.group.toUpperCase()}
                                        <a href="/">Xem Thêm</a>
                                    </div>
                                    <div>
                                        {courses.item.map(course => (
                                            <div key={course.id} className={styles.itemGroup}>
                                                <div
                                                    className={styles.itemGroupAvatar}
                                                    style={{ backgroundImage: `url(${course.icon})` }}
                                                ></div>
                                                <div className={styles.itemGroupName}>
                                                    {course.name}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className={styles.noResult}>Không tìm thấy kết quả nào.</div>
                        )}
                    </div>
                </Modal>
            )}
        </div>
    );
}


export default SearchForm;