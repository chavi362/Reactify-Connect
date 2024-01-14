import React, { useState,useEffect } from 'react'
import { Spinner } from 'react-bootstrap';
import useGetData from '../../hooks/useGetData'
import CommentsList from './Comments';
const CommentsSection = (props) => {
    const [comments, setComments] = useState(null);
    const [data, error, loading] = useGetData(`comments?postId=${props.postId}`);
    useEffect(() => {
        if (error) {
            console.error('Error fetching comments:', error);
        } else if (data) {
            setComments(data);
            console.log(comments);
        }
    }, [data, error, loading]);
    return (
        <div>
            {loading ? (
                <Spinner />
            ) : (
               <CommentsList comments={comments}></CommentsList>
            )}
        </div>
    )
}

export default CommentsSection
