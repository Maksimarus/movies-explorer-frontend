import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import NotFound from '../../pages/NotFound/NotFound';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import AuthContext from '../../contexts/AuthContext';
import { useState } from 'react';
import { commonRoutes, privateRoutes, publicRoutes } from '../../router';
import { useEffect } from 'react';
import MainApi from '../../api/MainApi';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/');
    const handleAuth = async () => {
      const me = await MainApi.getMe();
      setCurrentUser(me);
      setIsAuth(true);
    };
    handleAuth();
  }, []);
  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        <div className="app">
          <Routes>
            {commonRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
            {isAuth
              ? privateRoutes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<route.component />}
                  />
                ))
              : publicRoutes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<route.component />}
                  />
                ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </AuthContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
