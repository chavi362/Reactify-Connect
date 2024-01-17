import React, { useContext, useState } from 'react'//ask if ok to sent without props
import { UserContext } from '../../App';
import CommentItem from './CommentItem';

const CommentsList = ({ comments, addComment, deleteComment, updateComment }) => {
  const user = useContext(UserContext);
  const userEmail = user.email;
  const [newComment, setNewComment] = useState({
    name: '',
    body: '',
  });
  const isCommentCreator = (email) => email === userEmail;
  const handleAddComment = () => {
    console.log('Adding comment:', newComment);
    addComment({ ...newComment, email: userEmail });
    setNewComment({
      name: '',
      body: ''
    });
  };
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-8 col-lg-6">
        <div className="card shadow-0 border" style={{ backgroundColor: '#f0f2f5' }}>
          <div className="card-body p-4">
            <div className="form-outline mb-4">
              <input
                type="text"
                id="addCommentTitle"
                className="form-control"
                onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                placeholder="Type comment title..."
                value={newComment.title}
              />
              <label className="form-label" htmlFor="addCommentTitle">
                + Add comment title
              </label>
              <textarea
                id="addCommentBody"
                className="form-control"
                onChange={(e) => setNewComment({ ...newComment, body: e.target.value })}
                placeholder="Type comment body..."
                value={newComment.body}
              />
              <label className="form-label" htmlFor="addCommentBody">
                + Add comment body
              </label>
              <button className="btn btn-sm btn-primary" onClick={handleAddComment}>
                Add Comment
              </button>
            </div>
            {comments.map((comment, index) => (
              <CommentItem key={index} {...comment} handleConfirmUpdate={(updatedComment)=> updateComment({ ...comment, ...updatedComment })} isCommentCreator={isCommentCreator} handleDelete={() => deleteComment(comment.id)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsList;
