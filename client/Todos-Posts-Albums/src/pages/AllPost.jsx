import React, { useEffect, useState } from 'react';
import Pagination from '../components/Pagination';
import useGetPaginationData from '../hooks/useGetPaginationData';
import WithLoader from '../components/WithLoader';
import PostList from '../components/Posts/PostList';
import withSearch from '../components/WithSearch';
import withPostActions from '../components/Posts/WithPostsAction.';
const AllPost = () => {
  const perPage = 12;
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [data, error, loading, setLoading, prevPage, setPrevPage, nextPage, setNextPage] = useGetPaginationData(`posts?_page=${page}&_limit=${perPage}`);

  useEffect(() => {
    if (error) {
      console.error('Error fetching posts:', error);
    } else if (data) {
      setPosts(data);
    }
  }, [data, error]);
  const loadNextPage = () => {
    setPage(page + 1);
  };
  const loadPrevPage = () => {
    setPage(page - 1);
  };
  const PaginationWithLoader = WithLoader(Pagination);
  const postsWithSearch = withSearch(PostList);
  const PostListSearchLoader = WithLoader(postsWithSearch);
  const PostListWithActions =withPostActions(PostListSearchLoader)
  return (
    <div>
      <PostListWithActions  dataKey={"posts"} posts={posts} loading={loading}  handleUpdateClick={null} deletePost={null} allowEditDelete={false} />
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
