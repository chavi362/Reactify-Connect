import React, { useState, useEffect, useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import useGetData from '../hooks/useGetData';
import { UserContext } from '../App';
import FullPost from '../components/Posts/FullPost';
import PostList from '../components/Posts/PostList';
const PostsPage = () => {
  const user = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [showFullPost, setShowFullPost] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [data, error, loading] = useGetData(`posts?userId=${user.id}`);
  useEffect(() => {
    if (error) {
      console.error('Error fetching posts:', error);
    } else if (data) {
      setPosts(data);
    }
  }, [data, error, loading]);

  const selectPost = (post) => {
    setSelectedPost({ ...post });
    setShowFullPost(true);
  };

  const closeFullPost = () => {
    setShowFullPost(false);
  };
  return (<main>
    <div>
      <h1>My blog</h1>
      {loading ? (
        <Spinner />
      ) : (
        <>
          { }
          {showFullPost && <FullPost
            close={closeFullPost}
            post={selectedPost}
          />}
          <PostList handleSelectPost={selectPost} posts={posts} />

        </>
      )}
    </div>
  </main>
  )
}

export default PostsPage
