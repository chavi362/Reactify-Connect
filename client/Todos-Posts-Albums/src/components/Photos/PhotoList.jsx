import React from 'react';
import PhotoItem from './PhotoItem';

const PhotoList = (props) => {
  return (
    <div>
      {props.photos.map((photo) => (
        <PhotoItem key={photo.id} {...photo} fullSize={props.photoClick} deletePhoto={()=>props.deletePhoto(photo.id)} />
      ))}
    </div>
  );
};

export default PhotoList;
