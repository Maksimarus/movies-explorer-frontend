import { useEffect, useState } from 'react';

export const useMoviesLimit = () => {
  const [limit, setLimit] = useState(16);
  const [moviesCount, setMoviesCount] = useState(4);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        setWidth(window.innerWidth);
      }, 500);
    };
    if (width > 1159) {
      setLimit(16);
      setMoviesCount(4);
    } else if (width > 950) {
      setLimit(12);
      setMoviesCount(3);
    } else if (width > 700) {
      setLimit(8);
      setMoviesCount(2);
    } else {
      setLimit(5);
      setMoviesCount(1);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  return { limit, setLimit, moviesCount };
};
