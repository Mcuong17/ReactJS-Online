import { useEffect, useState } from "react"
import { Link } from "react-router"

import styles from "./Posts.module.scss"


function Posts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json))
    },[])

    return <div className="wrapper">
        <ul>{posts.map(post => <li key={post.id}> 
            <Link to={`/postdetail/${post.id}`}>
                <span className={styles.titlePost}>{post.id}, Title</span>
                    {post.title}
            </Link>
            </li>)}
        </ul>
    </div>
}

export default Posts