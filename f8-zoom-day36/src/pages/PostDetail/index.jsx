import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

import Loading from "../../components/Loading"
import styles from './PostDetail.module.scss'
function PostDetail() {

    const [post, setPost] = useState({})
    const [comment, setComment] = useState([])
     const param = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${param.id}`)
            .then(res => {
                if(!res.ok) {
                    navigate('/posts', {replace: true}) // khi dùng navigate sẽ tạo ra lịch sử
                }
                return res.json()
            })
            .then(json => setPost(json))

        fetch(`https://jsonplaceholder.typicode.com/posts/${param.id}/comments`)
             .then(res => {
                if(!res.ok) {
                    navigate('/posts', {replace: true}) // khi dùng navigate sẽ tạo ra lịch sử
                }
                return res.json()
            })
            .then(json => setComment(json))
    },[param.id, navigate])

    if (Object.keys(post).length === 0) return <Loading />

    return <div className={styles.wrapper}> 
        <h1 className={styles.title}>Post detail</h1>
        <div> <span className={styles.titleItem}>UserID: </span> {post.userId}</div>
        <div> <span className={styles.titleItem}>Title: </span> {post.title}</div>
        <div> <span className={styles.titleItem}>Body: </span> {post.body}</div>

        <h1 className={styles.titleComment}>Comment</h1>

        <div> {comment.map((item, index) => {
            return(<div key={index}  className={styles.wrapperComment}>
                <div> <span className={styles.titleItem}>Name: </span> {item.name}</div>
                <div> <span className={styles.titleItem}>Email: </span> {item.email}</div>
                <div> <span className={styles.titleItem}>Body: </span> {item.body}</div>
            </div>)
        })}</div>
    </div>
}

export default PostDetail