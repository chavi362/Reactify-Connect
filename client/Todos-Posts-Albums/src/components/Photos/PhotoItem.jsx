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
  const handleImageFallback = (e) => {
    e.target.src = '../../assets/images/image-url-not-found.png';
  };
  return (
    <div className="card" >
      <div className="position-relative">
        {!imageLoaded && !imageError && (
          <Spinner className="position-absolute top-50 start-50 translate-middle"></Spinner>
        )}
        <img
          className={`card-img-top ${imageLoaded ? 'loaded' : ''} ${imageError ? 'error' : ''}`}
          src={props.thumbnailUrl}
          alt="Card image cap"
          onLoad={handleImageLoad}
          onError={(e) => {
            handleImageError();
            handleImageFallback(e);
          }}
        />
      </div>
      {imageError && <p>Error loading image</p>}
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
