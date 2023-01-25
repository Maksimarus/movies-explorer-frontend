import Main from '../pages/Main/Main';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Movies from '../pages/Movies/Movies';
import SavedMovies from '../pages/SavedMovies/SavedMovies';
import Profile from '../pages/Profile/Profile';

export const privateRoutes = [
  { path: '/movies', component: Movies },
  { path: '/saved-movies', component: SavedMovies },
  { path: '/profile', component: Profile },
];

export const publicRoutes = [
  { path: '/', component: Main },
  { path: '/signin', component: Login },
  { path: '/signup', component: Register },
];
