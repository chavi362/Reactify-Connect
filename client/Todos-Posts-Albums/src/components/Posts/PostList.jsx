import React from 'react'
import PostItem from './PostItem'
const PostList = (props) => {
  return (
    <div className='row'>
        {
            props.posts.map((post)=>
            (
                <PostItem key={post.id} post={post} handleUpdateClick={()=>props.handleUpdateClick(photo)}></PostItem>
            ))
        }
    </div>
  )
}
export default PostList
