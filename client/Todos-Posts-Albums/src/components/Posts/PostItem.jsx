import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
const PostItem = (props) => {
  return (
    <div className="card" style={{ width: '18rem', margin: '10px' }}>
      <div className="card-body">
        <p className="card-title">POST {props.post.id}</p>
        <p className="card-text">{props.post.title}</p>
        <button onClick={props.handleUpdateClick} className="btn btn-sm btn-primary">
          <FaEdit /> Edit Content
        </button>
        <button  className="btn btn-sm btn-danger me-2" onClick={props.handleDelete}>
          <FaTrashAlt /> Delete
        </button>
        <button onClick={props.handleSelect}>Read more</button>
      </div>
    </div>
  );
}
export default PostItem;
