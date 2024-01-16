import React,{useState} from 'react'
import AlbumItem from './AlbumItem';
import AddTitleItem from '../AddTitleItem';
const AlbumList = (props) => {
  
  return (
    <div className='container'>
      <AddTitleItem addItem={props.addAlbum} itemName={"album"}/>
    <div className='row'>
    {
      props.albums.map((album) => (
        <div key={album.id} className="col-md-4 mb-4">
          <AlbumItem id={album.id} title={album.title} />
        </div>
      ))
    }
  </div>
  </div>
  )
}

export default AlbumList
