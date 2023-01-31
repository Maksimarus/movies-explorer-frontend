const filterMovies = (movies, searchValue, isShort) => {
  let filteredMovies = movies.filter((movie) =>
    movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
  );
  if (isShort) {
    filteredMovies = filteredMovies.filter((movie) => movie.duration < 40);
  }
  return filteredMovies;
};

export default filterMovies;
