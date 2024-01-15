import React, { useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import CommentsSection from '../Comments/CommentsSection';

const FullPost = (props) => {
    const [showComments, setShowComments] = useState(false)
    const toggleComments = () => {
        setShowComments(!showComments);
    };
    return (
        <div>
            <div className="full-post-container bg-light p-3 rounded">
                <button onClick={props.close}><FaWindowClose /></button>
                <div className="full-post">
                    <h2>{props.post.title}</h2>
                    <p>{props.post.body}</p>
                </div>
                <button onClick={toggleComments}>{!showComments ? "show" : "hide"} Comments</button>
            </div>
            {showComments && <CommentsSection postId={props.post.id} />}
        </div>
    );
}

export default FullPost;
