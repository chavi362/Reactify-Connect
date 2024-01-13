import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PostItem = (props) => {
    const navigate=useNavigate();
    const viewFullPost=()=>navigate(`/post/${props.id}`)
  return (
    <div className="card" style={{ width: '18rem', margin:'10px'}}>
      <img className="card-img-top" src="https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"/>
      <div className="card-body">
      <p className="card-title">POST {props.post.id}</p>
      <p className="card-text">{props.post.title}</p>
      <button onClick={props.deletePhoto}>
          <FaTrashAlt />
        </button>
        <button onClick={props.handleUpdateClick}>update</button>
        <button onClick={viewFullPost}>Read more</button>
        </div>
    </div>
  )
}

export default PostItem
