import { useEffect, useState } from 'react';

const useMoviesLimit = () => {
  const [limit, setLimit] = useState(16);
  const [moviesCountAdd, setMoviesCountAdd] = useState(4);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        setWidth(window.innerWidth);
      }, 500);
    };
    if (width > 1159) {
      setLimit(16);
      setMoviesCountAdd(4);
    } else if (width > 950) {
      setLimit(12);
      setMoviesCountAdd(3);
    } else if (width > 700) {
      setLimit(8);
      setMoviesCountAdd(2);
    } else {
      setLimit(5);
      setMoviesCountAdd(1);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  return { limit, setLimit, moviesCountAdd };
};

export default useMoviesLimit;
