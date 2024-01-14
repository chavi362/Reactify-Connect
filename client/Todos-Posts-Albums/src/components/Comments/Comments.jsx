import React, { useContext } from 'react'
import { FaEdit,FaTrashAlt } from 'react-icons/fa';;//ask vesily if isCommentCreator public function?
import { UserContext } from '../../App';
const Comment = ({ email,name, body,isCommentCreator }) => {
  return(
  <div className="card mb-4">
    <div className="card-body">
      <span className='card-title'>{name}</span>
      <p>{body}</p>
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-row align-items-center">
          {/* <img src={avatar} alt="avatar" width="25" height="25" /> */}
          <p className="small mb-0 ms-2">{email}</p>
          {isCommentCreator(email) && (
            <div>
              <button className="btn btn-sm btn-danger me-2">
                <FaTrashAlt /> Delete
              </button>
              <button className="btn btn-sm btn-primary">
                <FaEdit /> Update
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);
}
const CommentsList = ({ comments }) => {
  const user = useContext(UserContext);
  const userEmail = user.email;
  const isCommentCreator=(email)=>email===userEmail;
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-8 col-lg-6">
        <div className="card shadow-0 border" style={{ backgroundColor: '#f0f2f5' }}>
          <div className="card-body p-4">
            <div className="form-outline mb-4">
              <input type="text" id="addANote" className="form-control" placeholder="Type comment..." />
              <label className="form-label" htmlFor="addANote">
                + Add a note
              </label>
            </div>

            {comments.map((comment, index) => (
              <Comment key={index} {...comment} isCommentCreator={isCommentCreator}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default CommentsList;
