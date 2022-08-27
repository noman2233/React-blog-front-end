import React from 'react'
import { Posts } from "../../db"
import PostCard from '../postCard.js/PostCard.js'
import "./postitem.css"
import {Link}from  "react-router-dom"


const PostItem = () => {

    return (
        <>
            <h1 className='recent_post'>Recent Posts</h1>
            <div className='post_item'>

                {Posts.map(post => {
                    return (
                        <div key={post.id} className="post_map">
                          
                            <PostCard post={post} />
                       

                        </div>
                    )
                })}
            </div>
            <div className="btn">
                <Link to="/blogs">
                <button className='button'>All Blogs</button>
                </Link>
            </div>
        </>
    )
}

export default PostItem