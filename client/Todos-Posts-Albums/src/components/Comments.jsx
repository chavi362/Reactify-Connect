import React from 'react';

const Comment = ({ avatar, email, body }) => (
  <div className="card mb-4">
    <div className="card-body">
      <p>Type your note, and hit enter to add it</p>

      <div className="d-flex justify-content-between">
        <div className="d-flex flex-row align-items-center">
          <img src={avatar} alt="avatar" width="25" height="25" />
          <p className="small mb-0 ms-2">{email}</p>
        </div>
        <div className="d-flex flex-row align-items-center">
          <p className="small text-muted mb-0">Upvote?</p>
          <i className="far fa-thumbs-up mx-2 fa-xs text-black" style={{ marginTop: '-0.16rem' }}></i>
          <p className="small mb-0">0</p>
        </div>
      </div>
    </div>
  </div>
);

const CommentsList = ({ comments }) => (
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
            <Comment key={index} {...comment} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default CommentsList;
