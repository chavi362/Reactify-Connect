import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddNewPost = ({ show, handleClose, handleAddPost }) => {
  const [newPost, setNewPost] = useState({
    title: '',
    body: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    handleAddPost(newPost);
    setNewPost({
      title: '',
      body: '',
    });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              name="title"
              value={newPost.title}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBody">
            <Form.Label>Body</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter body"
              name="body"
              value={newPost.body}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleAdd}>
          Add Post
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default AddNewPost;
