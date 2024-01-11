import React from 'react';
import PhotoItem from './PhotoItem';

const PhotoList = (props) => {
  return (
    <div>
      {props.photos.map((photo) => (
        <PhotoItem key={photo.id} {...photo} fullSize={props.photoClick} />
      ))}
    </div>
  );
};

export default PhotoList;
