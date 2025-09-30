import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

import Loading from "../../components/Loading"
import styles from './PostDetail.module.scss'
function PostDetail() {

    const [post, setPost] = useState({})
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
    },[param.id])

    if (Object.keys(post).length === 0) return <Loading />

    return <div className={styles.wrapper}> 
        <h1 className={styles.title}>Post detail</h1>
        <div> <span className={styles.titleItem}>Title: </span> {post.title}</div>
        <div> <span className={styles.titleItem}>Body: </span> {post.body}</div>
    </div>
}

export default PostDetail