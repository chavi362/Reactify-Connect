import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import './Photos.scss'


const PhotoItem = (props) => {
  return (
    <div className="card" style={{width: '18rem'}}>
      <img className="card-img-top" src={props.thumbnailUrl} alt="Card image cap" onClick={() => { props.fullSize(props.url) }}></img>
      <div className="card-body">
        <p className="card-text">{props.title}</p>
        <button onClick={props.deletePhoto}>
          <FaTrashAlt />
        </button>
        <button onClick={props.handleUpdateClick}>update</button>
      </div>
    </div>
  )
}
export default PhotoItem