import { useEffect, useState } from "react"
// import { Link } from "react-router"
import Link from "../../components/Link"

import styles from "./Posts.module.scss"
import { useSearchParams } from "react-router"


function Posts() {

    const [param, setParam] = useSearchParams()
    const [posts, setPosts] = useState([])
    const [paging, setPaging] = useState(() => +param.get('paging') || 1)


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${paging}`)
      .then(response => {
        return response.json()
      })
      .then(json => setPosts(json))
    },[paging])

    useEffect(() => {
        setParam( paging <= 1 ? '' : { paging })
    },[paging, setParam])

    const handlePagination = (index) => {
        setPaging(index)
    }

    return <div className={styles.wrapper}>
         <h1 className={styles.title}>Post list</h1>
        <ul>{posts.map(post => <li key={post.id} className={styles.postItem}> 
            <Link to={`/postdetail/${post.id}`} className={styles.link}>
                <span className={styles.titlePost}>{post.id}, Title: </span>
                    {post.title}
            </Link>
            </li>)}
        </ul>

        <h2>Pagination</h2>
        <ul className={styles.paginations}>
            <li className={styles.pagination} onClick={() => handlePagination(paging - 1)}>{`<<`}</li>
            {Array(10).fill(null).map((_, index ) => {
            const pageNum = index+1
            return  <li 
            key={index} 
            className={`${styles.pagination} ${paging === pageNum ? styles.active : ''}`}
            onClick={() => handlePagination(index + 1)} >
                {pageNum}
            </li>
        }
           )}
            <li className={styles.pagination}  onClick={() => handlePagination(paging + 1)}>{`>>`}</li>
        </ul>
    </div>
}

export default Posts