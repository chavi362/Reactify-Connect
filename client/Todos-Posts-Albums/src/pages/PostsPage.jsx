import React ,{ useState, useEffect, useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import useGetData from '../hooks/useGetData';
import { UserContext } from '../App';
import PostList from '../components/Posts/PostList';
const PostsPage = () => {
  const user = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [data, error,loading] = useGetData(`posts?userId=${user.id}`);
  useEffect(() => {
    if (error) {
      console.error('Error fetching posts:', error);
    } else if (data) {
      setPosts(data);
    }
  }, [data, error,loading]);
  return (<main>
    <div>
      <h1>My blog</h1>
      {loading ? (
      <Spinner />
    ) : (
      <PostList posts={posts} />
    )}
    </div>
    </main>
  )
}

export default PostsPage
  //   const getUserPosts = async (userId) => {
    //     // Limit TWO posts only
    //     const posts = await api.get(`posts?userId=${userId}&_limit=2`);
    //     setPosts(posts.data);
    //   };