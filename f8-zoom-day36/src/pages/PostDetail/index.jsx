import { useEffect, useState } from "react"
import { useParams } from "react-router"

import Loading from "../../components/Loading"

function PostDetail() {

    const [post, setPost] = useState({})
     const param = useParams()
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${param.id}`)
            .then(res => res.json())
            .then(json => setPost(json))
    },[])

    if (Object.keys(post).length === 0) return <Loading />

    return <div> 
        <h1>Post detail</h1>
        <div>Title: {post.title}</div>
        <div>Body: {post.body}</div>
    </div>
}

export default PostDetail