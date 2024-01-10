import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
// import withLoader from '../../hoc/withLoader';
// import AuxWithLoader from '../../hoc/withLoader';
// import PhotoList from './PhotoList';
// import AuthorDetails from './AuthorDetails';
// import PhotoFullSize from './PhotoFullSize';
// import './Page.scss'
// import { UserContext } from '../../App';
// import api from '../../Api';

const PhotosPage = ({ match }) => {
//   const user = useContext(UserContext);
//   const [album, setAlbum] = useState({ id: match.params.id, title: null });
//   const [photos, setPhotos] = useState([]);
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [imgFullSize, setImgFullSize] = useState(false);
//   const [fullSizeURL, setFullSizeURL] = useState(null);
//   const getAlbum = async (id) => {
//     const album = await api.get(`albums/${id}`);
//     setAlbum(album.data);
//   };

//   const getAlbumPhotos = async (albumId) => {
//     const photos = await api.get(`photos?albumId=${albumId}`);
//     setPhotos(photos.data);
//   };

//   const getUserPosts = async (userId) => {
//     // Limit TWO posts only
//     const posts = await api.get(`posts?userId=${userId}&_limit=2`);
//     setPosts(posts.data);
//   };

//   const displayFullSize = (url) => {
//     setImgFullSize(true);
//     setFullSizeURL(url);
//   };

//   const closeFullSize = () => {
//     setImgFullSize(false);
//     setFullSizeURL(null);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       // TODO: Redirect or throw error if album doesn't exist
//       setLoading(true);

//       const albumData = await getAlbum(album.id);
//       const { userId, id } = albumData;

//       await getAlbumPhotos(id);
//       await getUserPosts(userId);

//       setLoading(false);
//     };

//     fetchData();
//   }, [album.id]);

//   return (
//     <main>
//       <AuxWithLoader loading={loading}>
//         <div className="titleBar">
//           <h1 className="heading1">Album: {album.title}</h1>
//           <Link className="closeBtn" to='/'>Close X</Link>
//         </div>

//         <div className="photosPage">
//           <PhotoList photos={photos} photoClick={displayFullSize} />
//           <AuthorDetails info={user} posts={posts} />
//         </div>
//       </AuxWithLoader>
//       <PhotoFullSize show={imgFullSize} url={fullSizeURL} close={closeFullSize} />
//     </main>
//   );
};

export default PhotosPage;
