import { useEffect, useState } from "react"
// import { Link } from "react-router"
import Link from "../../components/Link"

import styles from "./Posts.module.scss"
import { useSearchParams } from "react-router"
import Pagination from "../../components/Pagination"

const TOTAL_PAGE = 20
function Posts() {
    
    const [param, setParam] = useSearchParams()
    const [posts, setPosts] = useState([])
     const [page, setPage] = useState(() => +param.get('paging') || 1);


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${TOTAL_PAGE}&_page=${page}`)
      .then(response => {
        return response.json()
      })
      .then(json => setPosts(json))
    },[page])

    useEffect(() => {
        setParam( page <= 1 ? '' : { page })
    },[page, setParam])



    return <div className={styles.wrapper}>
         <h1 className={styles.title}>Post list</h1>
        <ul>{posts.map(post => <li key={post.id} className={styles.postItem}> 
            <Link to={`/postdetail/${post.id}`} className={styles.link}>
                <span className={styles.titlePost}>{post.id}, Title: </span>
                    {post.title}
            </Link>
            </li>)}
        </ul>


        <Pagination
        currentPage={page}
        totalPages={TOTAL_PAGE}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </div>
}

export default Posts