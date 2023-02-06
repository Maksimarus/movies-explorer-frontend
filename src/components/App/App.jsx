import './App.css';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import NotFound from '../../pages/NotFound/NotFound';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import AuthContext from '../../contexts/AuthContext';
import { commonRoutes, privateRoutes, publicRoutes } from '../../router';
import MainApi from '../../api/MainApi';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleAuth = async () => {
      const me = await MainApi.getMe();
      setCurrentUser(me);
      setIsAuth(true);
      navigate('/');
    };
    handleAuth();
  }, [isAuth]);

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
                  <>
                    <Route
                      key={route.path}
                      path={route.path}
                      element={<route.component />}
                    />
                    <Route
                      path={route.path}
                      element={<Navigate to={'/'} replace />}
                    ></Route>
                  </>
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
