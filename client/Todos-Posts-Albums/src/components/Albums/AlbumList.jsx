import React from 'react'
import AlbumItem from './AlbumItem';
const AlbumList = (props) => {
  return (
    <div className='row'>
    {
      props.albums.map((album) => (
        <div key={album.id} className="col-md-4 mb-4">
          <AlbumItem id={album.id} title={album.title} />
        </div>
      ))
    }
  </div>
  )
}

export default AlbumList
