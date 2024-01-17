import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { createContext } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodosPage from './pages/TodosPage';
import AlbumsPage from './pages/AlbumsPage'
import Home from './pages/Home';
import Info from './pages/Info';
import Error from './pages/Error';
import Login from './pages/Login';
import Register from './pages/Register';
import AddUserDetails from './pages/AddUserDetails';
import Layout from './components/Layout';
import PhotosPage from './pages/PhotosPage';
import PostsPage from './pages/MyPostsPage';
import AllPost from './pages/AllPost';
import './App.css'
export const UserContext = createContext();
function App() {
  const [user, setUser, claerLocalStorage] = useLocalStorage('user', null);
  const deleteUser = () => {
    claerLocalStorage();
    setUser(null);
  }
  return (
    <BrowserRouter>
      <UserContext.Provider value={user}>
        <Routes>
          <Route path="/" element={<Layout deleteUser={deleteUser} />}>
            <Route path="/login" element={<Login updateUserContext={setUser} />} />
            <Route path="/register" element={<Register updateUserContext={setUser} />} />
            <Route path="/create-account" element={<AddUserDetails updateUserContext={setUser} />} />
            <Route path="users/:userId/"  >
              <Route path="home" index element={<Home />} />
              <Route path="info" element={<Info />} />
              <Route path="albums" element={<AlbumsPage />} />
              <Route path="albums/:albumid/photos" element={<PhotosPage />} />
              <Route path="posts/" element={<PostsPage />} />
              <Route path="todos" element={<TodosPage />} />
            </Route>
            <Route path="/all-posts" element={<AllPost />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
export default App;