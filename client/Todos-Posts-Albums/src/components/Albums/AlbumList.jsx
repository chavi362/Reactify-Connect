import React from 'react';
import './Album.scss'
import AlbumItem from './AlbumItem';

const AlbumList = (props) => (
  <ul className='row albumList'>
    {props.albums.map((album) => (
      <AlbumItem className="col-md-4 mb-4" key={album.id} id={album.id} title={album.title}  />
    ))}
  </ul>
);
export default AlbumList;
