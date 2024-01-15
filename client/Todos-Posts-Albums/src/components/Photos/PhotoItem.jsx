import React, { useState } from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { Spinner } from 'react-bootstrap';

const PhotoItem = (props) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="card" style={{ width: '28rem', margin: '10px' }}>
      {!imageLoaded && !imageError && <Spinner />} 
      <img
        className={`card-img-top ${imageLoaded ? 'loaded' : ''} ${imageError ? 'error' : ''}`}
        src={props.thumbnailUrl}
        alt="Card image cap"
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
      {imageError && <p>Error loading image</p>} {/* Show error message if image fails to load */}
      <div className="card-body">
        <p className="card-text">{props.title}</p>
        <button onClick={props.deletePhoto}>
          <FaTrashAlt /> delete
        </button>
        <button onClick={props.handleUpdateClick}>
          <FaEdit /> update
        </button>
      </div>
    </div>
  );
};

export default PhotoItem;
