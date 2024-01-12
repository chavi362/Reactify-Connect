import React, { useState, useEffect, useContext } from 'react';
import AlbumList from '../../components/Albums/AlbumList';
import { Spinner } from 'react-bootstrap';
import useGetData from '../../hooks/useGetData'
import { UserContext } from '../../App';
const AlbumsPage = () => {
  const user = useContext(UserContext);
  const [albums, setAlbums] = useState([]);
  const [data, error,loading] = useGetData(`albums?userId=${user.id}`);
  useEffect(() => {
    if (error) {
      console.error('Error fetching albums:', error);
    } else if (data) {
      setAlbums(data);
    }
  }, [data, error,loading]);
  return (
    <main>
    <div>
      <h1>See all albums</h1>
    </div>
    {loading ? (
      <Spinner />
    ) : (
      <AlbumList albums={albums} />
    )}
  </main>
  );
};

export default AlbumsPage;
