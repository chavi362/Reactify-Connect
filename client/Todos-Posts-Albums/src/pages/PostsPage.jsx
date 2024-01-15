import React, { useState, useEffect, useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import useGetData from '../hooks/useGetData';
import { UserContext } from '../App';
import FullPost from '../components/Posts/FullPost';
import PostList from '../components/Posts/PostList';
import api from '../Api';
const PostsPage = () => {
  const user = useContext(UserContext);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updatedPostContent, setUpdatedPostContent] = useState('');
  const [posts, setPosts] = useState([]);
  const [showFullPost, setShowFullPost] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [data, error, loading, setLoading] = useGetData(`posts?userId=${user.id}`);
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
  const openUpdateModal = () => {
    setUpdatedPostContent(selectedPost.body);
    setShowUpdateModal(true);
  };

  const closeUpdateModal = () => {
    setShowUpdateModal(false);
  };
  const deletePost = async (postIdToDelete) => {
    try {
      setLoading(true);
      await api.delete(`/posts/${postIdToDelete}`);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postIdToDelete));
      console.log(`Deleted post with ID ${postIdToDelete}`);
    } catch (error) {
      console.error('Error deleting post:', error);
    } finally {
      setLoading(false);
    }
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
             <Modal show={showUpdateModal} onHide={closeUpdateModal}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Post Content</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Control
                  as="textarea"
                  value={updatedPostContent}
                  onChange={(e) => setUpdatedPostContent(e.target.value)}
                />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={closeUpdateModal}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={updatePost}>
                  Save
                </Button>
              </Modal.Footer>
            </Modal>
          <PostList handleSelectPost={selectPost} posts={posts} />

        </>
      )}
    </div>
  </main>
  )
}

export default PostsPage
