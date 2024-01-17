import React, { useState } from 'react';
import FullPost from './FullPost'
const withPostActions = (WrappedComponent) => {
  const WithPostActions = (props) => {
    const [showFullPost, setShowFullPost] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
    const handleSelectPost = (post) => {
      setSelectedPost({ ...post });
      setShowFullPost(true);
    };
    const closeFullPost = () => {
      setShowFullPost(false);
    };
    const combinedProps = { ...props, handleSelectPost: handleSelectPost };
    return (
      <>
        {showFullPost && <FullPost close={closeFullPost} post={selectedPost} />}
        <WrappedComponent {...combinedProps} />
      </>
    );
  };
  return WithPostActions;
};
export default withPostActions;
