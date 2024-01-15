import React, { useEffect, useState } from 'react';
import Pagination from '../components/Pagination/Pagination';
import useGetPaginationData from '../hooks/useGetPaginationData';
import WithLoader from '../components/WithLoader';
import PostList from '../components/Posts/PostList';

const AllPost = () => {
  const perPage = 12;
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [data, error, loading, setLoading, prevPage, setPrevPage, nextPage, setNextPage] = useGetPaginationData(
    `posts&_page=${page}&_limit=${perPage}`
  );

  useEffect(() => {
    if (error) {
      console.error('Error fetching posts:', error);
    } else if (data) {
      setPosts(data);
    }
  }, [data, error, loading]);

  const loadNextPage = () => {
    setPage(page + 1);
  };

  const loadPrevPage = () => {
    setPage(page - 1);
  };

  const PaginationWithLoader = WithLoader(Pagination);

  return (
    <div>
      <PaginationWithLoader
        loading={loading}
        isNext={nextPage}
        isPrev={prevPage}
        current={page}
        nextPage={loadNextPage}
        prevPage={loadPrevPage}
      />
    </div>
  );
};

export default AllPost;
