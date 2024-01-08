import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { createContext } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import Login from './pages/Login';
import Home from './pages/Home';
import Albums from './pages/Albums/Albums';
import Photos from './pages/Albums/Photos';
import Error from './pages/Error';
import Register from './pages/Register';
import CreateAccount from './pages/CreateAccount';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todos from './pages/Todos/Todos'
export const UserContext = createContext();
import UpdateTodo from './pages/Todos/UpdateTodo';
import CreateNewTodo from './pages/Todos/CreateNewTodo';
import DeletePhoto from './pages/Albums/DeletePhoto';
import Info from './pages/Info';

function App() {
  const [user, setUser] = useLocalStorage('user', null);
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
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
