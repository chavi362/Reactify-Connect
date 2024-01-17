import React from 'react';
import PhotoItem from './PhotoItem';
const PhotosList = (props) => {
  return (
    <div className='row'>
      {props.photos.map((photo) => (
        <div key={photo.id} className="col-md-3 mb-3">
          <PhotoItem
            thumbnailUrl={photo.thumbnailUrl}
            title={photo.title}
            url={photo.url}
            deletePhoto={() => props.deletePhoto(photo.id)}
            handleUpdateClick={() => props.handleUpdateClick(photo)}
            fullSize={props.fullSize}
          />
        </div>
      ))}
    </div>
  );
};
export default PhotosList;
