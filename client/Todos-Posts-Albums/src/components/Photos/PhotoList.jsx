import React from 'react';
import PhotoItem from './PhotoItem';
const PhotoList = (props) => {
  return (
    <div className="row">
      {props.photos.map((photo) => (
        <PhotoItem key={photo.id} {...photo} fullSize={props.photoClick} className="col-md-4 mb-4" deletePhoto={()=>props.deletePhoto(photo.id)} handleUpdateClick={()=>props.handleUpdateClick(photo)}/>
      ))}
    </div>
  );
};

export default PhotoList;
