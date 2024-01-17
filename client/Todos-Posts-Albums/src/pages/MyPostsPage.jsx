import React, { useState, useEffect, useContext } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import useGetData from '../hooks/useGetData';
import { UserContext } from '../App';
import PostList from '../components/Posts/PostList';
import api from '../Api';
import WithLoader from '../components/WithLoader';
import { FaPlusSquare } from 'react-icons/fa';
import AddNewPost from '../components/Posts/AddNewPost';
import withSearch from '../components/WithSearch';
import withPostActions from '../components/Posts/WithPostsAction.';
const PostsPage = () => {
  const user = useContext(UserContext);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updatedPost, setUpdatedPost] = useState({ userId: '', id: '', title: '', body: '' });
  const [posts, setPosts] = useState([]);
  const [data, error, loading, setLoading] = useGetData(`posts?userId=${user.id}`);
  const [showAddPost, setShowAddPost] = useState(false);
  useEffect(() => {
    if (error) {
      console.error('Error fetching posts:', error);
    } else if (data) {
      setPosts(data);
    }
  }, [data, error]);
  const openUpdateModal = (post) => {
    setUpdatedPost(post);
    setShowUpdateModal(true);
  };
  const closeUpdateModal = () => {
    setShowUpdateModal(false);
  };
  const deletePost = async (postIdToDelete) => {
    try {
      setLoading(true);
      await api.delete(`/posts/${postIdToDelete}`);
      setPosts((prevPosts) => [...prevPosts.filter((post) => post.id !== postIdToDelete)]);
      console.log(`Deleted post with ID ${postIdToDelete}`);
    } catch (error) {
      console.error('Error deleting post:', error);
    } finally {
      setLoading(false);
    }
  };
  const updatePost = async () => {
    try {
      setLoading(true);
      await api.patch(`/posts/${updatedPost.id}`, { body: updatedPost.body });
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === updatedPost.id ? { ...post, body: updatedPost.body } : post
        )
      );
      console.log(`Updated post with ID ${updatedPost.id}`);
    } catch (error) {
      console.error('Error updating post:', error);
    } finally {
      setLoading(false);
      setShowUpdateModal(false);
    }
  };
  const addPost = async (post) => {
    try {
      setLoading(true);
      const newPost = {
        userId: user.id,
        ...post
      };
      const response = await api.post('/posts', newPost);
      const addedPost = response.data;
      console.log('Post added successfully');
      setPosts((prevPosts) => [...prevPosts, addedPost]);
    } catch (error) {
      console.error('Error adding post:', error);
      console.log('Detailed error response:', error.response);
    } finally {
      setLoading(false);
    }
  }
  function closeAddPost() {
    setShowAddPost(false)
  }
  const postsWithSearch = withSearch(PostList);
  const PostListSearchLoader = WithLoader(postsWithSearch);
  const PostListWithActions =withPostActions(PostListSearchLoader)
  return (
    <main>
      <div>
        <h1>My blog</h1>
        {!showAddPost && (
          <button onClick={() => setShowAddPost(true)}>
            <FaPlusSquare /> Add new post
          </button>
        )}
        <AddNewPost show={showAddPost} handleClose={closeAddPost} handleAddPost={addPost} />
        <Modal show={showUpdateModal} onHide={closeUpdateModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Post Content</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              as="textarea"
              value={updatedPost.body}
              onChange={(e) => setUpdatedPost({ ...updatedPost, body: e.target.value })}
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
        <PostListWithActions  dataKey={"posts"} posts={posts} loading={loading}  handleUpdateClick={openUpdateModal} deletePost={deletePost} allowEditDelete={true} />
      </div>
    </main>
  );
};
export default PostsPage
