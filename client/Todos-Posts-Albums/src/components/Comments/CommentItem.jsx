import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const CommentItem = ({ email, name, body, isCommentCreator, handleDelete, handleConfirmUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(
    { name: name, body: body }
  )
  function editCommentChange(e) {
    setEditedComment({ ...editedComment, [e.target.name]: e.target.value });
  }

  const handleUpdate = () => {
    console.log(editedComment);
    handleConfirmUpdate(editedComment);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedComment(
      { name: name, body: body }
    )
    setIsEditing(false);
  };

  return (
    <div>
      <div className="card mb-4">
        <div className="card-body">
          {isEditing ? (
            <>
              <div className="mb-3">
                <label htmlFor="editedTitle" className="form-label">Title:</label>
                <input
                  type="text"
                  id="editedTitle"
                  className="form-control"
                  value={editedComment.name}
                  name="name"
                  onChange={editCommentChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="editedBody" className="form-label">Body:</label>
                <textarea
                  id="editedBody"
                  className="form-control"
                  value={editedComment.body}
                  name="body"
                  onChange={editCommentChange}
                />
              </div>
              <div className="d-flex justify-content-between">
                <button onClick={handleUpdate} className="btn btn-sm btn-success">
                  Save
                </button>
                <button onClick={handleCancel} className="btn btn-sm btn-secondary">
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <span className='card-title'>{name}</span>
              <p className='card-text'>{body}</p>
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  {/* <img src={avatar} alt="avatar" width="25" height="25" /> */}
                  <p className="small mb-0 ms-2">{email}</p>
                  <br></br>
                  {isCommentCreator(email) ? (
                    <div>
                      <button onClick={() => setIsEditing(true)} className="btn btn-sm btn-primary">
                        <FaEdit /> Edit
                      </button>
                      <button onClick={handleDelete} className="btn btn-sm btn-danger me-2">
                        <FaTrashAlt /> Delete
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
