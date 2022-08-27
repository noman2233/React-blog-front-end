import React from 'react'
import "./postcard.css"
import { Link } from "react-router-dom";


const PostCard = ({post}) => {


 
 const {image,title,body,slug,author}=post
  return (
    <div className='post_card'>

        <div className="post_img">

        <img src={image} alt="" className='post_img'/>
        </div>
        <div className="title_body">
       <h1 className='post_title'><Link to={`/blogpost/${slug}`}>{title}</Link></h1>
        <p className='post_body'>{body.slice(0,120)}....</p>
        </div>
        <h3 className="author"><small>Author</small> - {author}</h3>
    </div>
  )
}

export default PostCard