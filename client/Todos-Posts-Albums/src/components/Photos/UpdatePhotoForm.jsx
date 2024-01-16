import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const UpdatePhotoForm = ({ photo, onUpdate }) => {
  const [updatedPhoto, setUpdatedPhoto] = useState({ ...photo });
  const handleUpdate = () => {
    onUpdate(updatedPhoto);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedPhoto((prevPhoto) => ({
      ...prevPhoto,
      [name]: value,
    }));
  };
  return (
    <Form>
      <Form.Group controlId="formTitle">
        <Form.Label>Title:</Form.Label>
        <Form.Control
          type="text"
          value={updatedPhoto.title}
          name="title"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formThumbnailUrl">
        <Form.Label>Thumbnail URL:</Form.Label>
        <Form.Control
          type="text"
          value={updatedPhoto.thumbnailUrl}
          name="thumbnailUrl"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="button" onClick={handleUpdate}>
        Save the photo
      </Button>
    </Form>
  );
};

export default UpdatePhotoForm;
