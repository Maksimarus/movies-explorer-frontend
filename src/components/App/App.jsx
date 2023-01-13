import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../../pages/Main';
import Movies from '../../pages/Movies/Movies';
import SavedMovies from '../../pages/SavedMovies';
import Profile from '../../pages/Profile/Profile';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import NotFound from '../../pages/NotFound/NotFound';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
