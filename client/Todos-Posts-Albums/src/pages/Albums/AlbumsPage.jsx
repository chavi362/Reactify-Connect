import React, { useState, useEffect, useContext } from 'react';
import AlbumList from '../../components/Albums/AlbumList';
import useGetData from '../../hooks/useGetData'
import { UserContext } from '../../App';
import WithLoader from '../../components/WithLoader';
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
  }, [data, error]);
  const AlbumListWithLoader = WithLoader(AlbumList)
  return (
    <main>
      <div>
        <h1>See all albums</h1>
      </div>
      <AlbumListWithLoader loading={loading} albums={albums} />
    </main>
  );
};

export default AlbumsPage;
