import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import NotFound from '../../pages/NotFound/NotFound';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import AuthContext from '../../contexts/AuthContext';
import {
  commonRoutes,
  publicRoutes,
  privateRoutes,
  publicPaths,
  privatePaths,
} from '../../router';
import MainApi from '../../api/MainApi';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const handleAuth = async () => {
      const me = await MainApi.getMe();
      setCurrentUser(me);
      setIsAuth(true);
      localStorage.setItem('isAuth', true);
    };
    handleAuth();
  }, [isAuth]);

  useEffect(() => {
    if (isAuth) {
      publicPaths.includes(location.pathname) && navigate('/movies');
    } else {
      privatePaths.includes(location.pathname) && navigate('/');
    }
  }, [isAuth, location]);

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
