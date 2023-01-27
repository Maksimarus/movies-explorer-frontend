export const filterMovieDuration = (movies) => {
  return movies.filter((movie) => movie.duration < 40);
};
