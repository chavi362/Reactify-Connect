import React from 'react';
import PostItem from './PostItem';

const PostList = (props) => {
  return (
    <div className='row'>
      {props.posts.map((post) => (
        <PostItem
          key={post.id}
          handleDelete={() => props.deletePost(post.id)}
          post={post}
          handleSelect={() => props.handleSelectPost(post)}
          handleUpdateClick={() => props.handleUpdateClick(post)}
        />
      ))}
    </div>
  );
}
export default PostList;
