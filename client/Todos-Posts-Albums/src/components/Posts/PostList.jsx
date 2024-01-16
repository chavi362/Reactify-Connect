import React from 'react';
import PostItem from './PostItem';

const PostList = (props) => {
  console.log(props.posts)
  return (
    <div className='row'>
      {props.posts.map((post) => (
        <div key={post.id} className="col-md-4 mb-4">
        <PostItem
          handleDelete={() => props.deletePost(post.id)}
          post={post}
          handleSelect={() => props.handleSelectPost(post)}
          handleUpdateClick={() => props.handleUpdateClick(post)}
        />
        </div>
      ))}
    </div>
  );
}
export default PostList;
