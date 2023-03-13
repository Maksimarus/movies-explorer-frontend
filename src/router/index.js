import Main from '../pages/Main';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Movies from '../pages/Movies/Movies';
import SavedMovies from '../pages/SavedMovies';
import Profile from '../pages/Profile/Profile';

export const commonRoutes = [{ path: '/', component: Main }];

export const privateRoutes = [
  { path: '/movies', component: Movies },
  { path: '/saved-movies', component: SavedMovies },
  { path: '/profile', component: Profile },
];

export const publicRoutes = [
  { path: '/signin', component: Login },
  { path: '/signup', component: Register },
];

export const privatePaths = privateRoutes.map((route) => route.path);
export const publicPaths = publicRoutes.map((route) => route.path);
