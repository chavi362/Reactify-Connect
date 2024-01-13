import React, { useState } from 'react';
// import { FaWindowClose } from 'react-icons/fa';

const UpdatePhotoForm = ({ photo,  onUpdate }) => {
  const [updatedPhoto, setUpdatedPhoto] = useState({ ...photo });

  const handleUpdate = () => {
    // Call the onUpdate function with the updated details
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
    <div className="card">
      <img
        className="card-img-top"
        src={updatedPhoto.thumbnailUrl || "./assets/images/404-status-code.png"}
        alt="Thumbnail"
        onError={(e) => {
          e.target.src = "./assets/images/404-status-code.png"; // Fallback image URL
        }}
      />
      <div className="card-body">
        <form>
          <label>Title:</label>
          <input
            type="text"
            className="form-control"
            value={updatedPhoto.title}
            name="title"
            onChange={handleChange}
          />

          <label>Thumbnail URL:</label>
          <input
            type="text"
            className="form-control"
            value={updatedPhoto.thumbnailUrl}
            name="thumbnailUrl"
            onChange={handleChange}
          />

          <button type="button" onClick={handleUpdate}>
            Update
          </button>
          {/* <button type="button" onClick={onClose}>
            <FaWindowClose />
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default UpdatePhotoForm;
