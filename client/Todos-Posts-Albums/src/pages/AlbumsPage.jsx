import React, { useState, useEffect, useContext } from 'react';
import AlbumList from '../components/Albums/AlbumList';
import useGetData from '../hooks/useGetData'
import { UserContext } from '../App';
import WithLoader from '../components/WithLoader';
import withSearch from '../components/WithSearch';
import api from '../Api';
const AlbumsPage = () => {
  const user = useContext(UserContext);
  const [albums, setAlbums] = useState([]);
  const [data, error, loading,setLoading] = useGetData(`albums?userId=${user.id}`);
  useEffect(() => {
    if (error) {
      console.error('Error fetching albums:', error);
    } else if (data) {
      setAlbums(data);
    }
  }, [data, error]);
  const handleAddAlbum = async (albumTitle) => {
		try {
			setLoading(true);
			const newAlbum = {
				userId: user.id,
				title: albumTitle,
			};
			const response = await api.post('/albums', newAlbum);
			const addedAlbum= response.data;
			console.log('Album added successfully');
			setAlbums((prevAlbums) => [...prevAlbums, addedAlbum]);
		} catch (error) {
			console.error('Error adding album:', error);
			console.log('Detailed error response:', error.response);
		} finally {
			setLoading(false);
		}
	};
  const AlbumsListWithSearch = withSearch(AlbumList);
  const AlbumsListSearchLoader = WithLoader(AlbumsListWithSearch);
  return (
    <main>
      <div>
        <h1>See all albums</h1>
      </div>
      <AlbumsListSearchLoader dataKey={"albums"} loading={loading} albums={albums} addAlbum={handleAddAlbum}/>
    </main>
  );
};

export default AlbumsPage;
