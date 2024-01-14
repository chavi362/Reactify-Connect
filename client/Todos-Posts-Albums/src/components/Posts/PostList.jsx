import React from 'react'
import PostItem from './PostItem'
const PostList = (props) => {
  return (
    <div className='row'>
        {
            props.posts.map((post)=>
            (
                <PostItem className="col-md-4 mb-4"key={post.id} post={post} handleUpdateClick={()=>props.handleUpdateClick(photo)}></PostItem>
            ))
        }
    </div>
  )
}
export default PostList
