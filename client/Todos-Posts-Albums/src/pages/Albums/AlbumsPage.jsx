import React, { useState, useEffect, useContext } from 'react';
import AlbumList from '../../components/Albums/AlbumList';
import Pagination from '../../components/Pagination/Pagination';
import { Spinner } from 'react-bootstrap';
import useGetData from '../../hooks/useGetData'

import { UserContext } from '../../App';
const AlbumsPage = () => {
  const user = useContext(UserContext);
  const perPage = 10;
  const [page, setPage] = useState(1);
  const [prevPage, setPrevPage] = useState(false);
  const [nextPage, setNextPage] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, error] = useGetData(`albums?userId=${user.Id}&_page=${page}&_limit=${perPage}`);
  useEffect(() => {
    if (error) {
      console.error('Error fetching albums:', error);
    } else if (data) {
      pagination(data.headers.link);
      setAlbums(data);
      setLoading(false);
    }
  }, [data, error]);

  const pagination = (headers) => {
    // Splitting links from header
    const links = headers.split(',');

    // State representation of pages availability
    const pages = { nextPage: false, prevPage: false };

    links.forEach((link) => {
      const temp = link.split(';');

      // Switching on link.rel
      switch (temp[1].replace(/\s/g, '')) {
        case 'rel="next"':
          pages.nextPage = true;
          break;
        case 'rel="prev"':
          pages.prevPage = true;
          break;
        default:
          break;
      }
    });
    setNextPage(pages.nextPage);
    setPrevPage(pages.prevPage);
  };
  const loadNextPage = () => {
    setPage(page + 1);
  };
  const loadPrevPage = () => {
    setPage(page - 1);
  };
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
    <Pagination isNext={nextPage} isPrev={prevPage} current={page} nextPage={loadNextPage} prevPage={loadPrevPage} />
  </main>
  );
};

export default AlbumsPage;
