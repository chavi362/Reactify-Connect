import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostItem = (props) => {
  const navigate = useNavigate();
  const viewFullPost = () => navigate(`/post/${props.id}`);
  const imagePaths = [
    "../../assets/images/banner1.jpg",
    "../../assets/images/banner2.jpg",
    "../../assets/images/banner3.jpg",
  ];
  
  // Randomly select an image path
  const randomImagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)];

  return (
    <div className="card" style={{ width: '18rem', margin: '10px' }}>
      <img className="card-img-top" src={randomImagePath} alt="Banner" />
      <div className="card-body">
        <p className="card-title">POST {props.post.id}</p>
        <p className="card-text">{props.post.title}</p>
        <button onClick={props.handleUpdateClick}>update</button>
        <button onClick={viewFullPost}>Read more</button>
      </div>
    </div>
  );
}

export default PostItem;
