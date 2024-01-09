import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { createContext } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Info from './pages/Info';
import Todos from './pages/Todos/Todos';
import UpdateTodo from './pages/Todos/UpdateTodo';
import CreateNewTodo from './pages/Todos/CreateNewTodo';
import Albums from './pages/Albums/Albums';
import DeletePhoto from './pages/Albums/DeletePhoto';
import Home from './pages/Home';
import Error from './pages/Error';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateAccount from './pages/CreateAccount';
import Layout from './components/Layout';
import Photos from './pages/Albums/Photos';
import './App.css'

export const UserContext = createContext();
function App() {
  const [user, setUser] = useLocalStorage('user', null);
  return (
    <BrowserRouter>
       <UserContext.Provider value={user}>
          <Routes>
            <Route path="/" element={ <Layout/>} />
            <Route path="/login" setUser={setUser} element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/users/:userId" element={<Info />}>
              <Route path="albums" element={<Albums />}>
                <Route path="photos" element={<Photos />} />
                <Route path="delete-photo/:photoId" element={<DeletePhoto />} />
              </Route>
              <Route path="todos" element={<Todos />}>
                <Route path="update/:todoId" element={<UpdateTodo />} />
                <Route path="create-new" element={<CreateNewTodo />} />
              </Route>
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
      
      </UserContext.Provider>
    </BrowserRouter>
  );
}
export default App;