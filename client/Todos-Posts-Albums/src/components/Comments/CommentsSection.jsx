import React, { useState, useEffect } from 'react'
import useGetData from '../../hooks/useGetData'
import CommentsList from './CommentsList';
import api from '../../Api';
import WithLoader from '../WithLoader';
const CommentsSection = (props) => {
    const [comments, setComments] = useState([]);
    const [data, error, loading, setLoading] = useGetData(`comments?postId=${props.postId}`);
    useEffect(() => {
        if (error) {
            console.error('Error fetching comments:', error);
        } else if (data) {
            setComments(data);
            console.log(comments);
        }
    }, [data, error]);
    const addComment = async (commentContent) => {
        try {
            const newComment = { postId: props.postId, ...commentContent }
            console.log(newComment)
            setLoading(true);
            const response = await api.post('/comments', newComment);
            const addedComment = response.data;
            console.log('Comment added successfully');
            setComments((prevComments) => [...prevComments, addedComment]);
        } catch (error) {
            console.error('Error adding comment:', error);
            console.log('Detailed error response:', error.response);
        }
        finally {
            setLoading(false);
        }
    };
    const deleteComment = async (commentIdToDelete) => {
        try {
            setLoading(true)
            await api.delete(`/comments/${commentIdToDelete}`);
            setComments((prevComments) => prevComments.filter((comment) => comment.id !== commentIdToDelete));
            console.log(`Deleted comment with ID ${commentIdToDelete}`);
        } catch (error) {
            console.error('Error deleting comment:', error);
        }
        finally {
            setLoading(false);
        }
    }
    const updateComment = async (commentToUpdate) => {
        try {
            setLoading(true);
            await api.put(`/comments/${commentToUpdate.id}`, commentToUpdate);
            setComments((prevComments) =>
                prevComments.map((comment) =>
                    comment.id === commentToUpdate.id ? { ...commentToUpdate } : comment
                )
            );
            console.log(`Updated comment with ID ${commentToUpdate.id}`);
        } catch (error) {
            console.error('Error updating comment:', error);
        } finally {
            setLoading(false);
        }
    };
    const CommentsListWithLoader = WithLoader(CommentsList)
    return (
        <div>
            <CommentsListWithLoader loading={loading} comments={comments} deleteComment={deleteComment} addComment={addComment} updateComment={updateComment}></CommentsListWithLoader>
        </div>
    )
}

export default CommentsSection
