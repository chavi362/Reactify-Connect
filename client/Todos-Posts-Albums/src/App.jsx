import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';
// import Home from './pages/Home';
import Info from './pages/Info'; 
import Albums from './pages/Albums';
import Error from './pages/Error';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateAccount from './pages/CreateAccount';
import 'bootstrap/dist/css/bootstrap.min.css';
export const UserContext = createContext();


function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          {/* <Route
            path="/"
            element={
              <SharedLayout> */}
           
                {/* <Route index element={<Home />} /> */}
               
                <Route path="info" element={<Info />} />
                {/* <Route
                  path="albums"
                  element={
                    // <SharedProductLayout>
                      <Route index element={<Albums />} />
                    // </SharedProductLayout>
                  } */}
                {/* /> */}
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register/>} />
                <Route path="/create-account" element={<CreateAccount/>} />
            {/* }
          /> */}
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
