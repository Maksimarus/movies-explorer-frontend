import { useEffect, useState } from 'react';
import { RESOLUTIONS } from '../utils/constants';

const useMoviesLimit = () => {
  const [limit, setLimit] = useState(RESOLUTIONS.large.limit);
  const [moviesCountAdd, setMoviesCountAdd] = useState(
    RESOLUTIONS.large.append
  );
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        setWidth(window.innerWidth);
      }, 500);
    };
    if (width > RESOLUTIONS.large.width) {
      setLimit(RESOLUTIONS.large.limit);
      setMoviesCountAdd(RESOLUTIONS.large.append);
    } else if (width > RESOLUTIONS.middle.width) {
      setLimit(RESOLUTIONS.middle.limit);
      setMoviesCountAdd(RESOLUTIONS.middle.append);
    } else if (width > RESOLUTIONS.small.width) {
      setLimit(RESOLUTIONS.small.limit);
      setMoviesCountAdd(RESOLUTIONS.small.append);
    } else {
      setLimit(RESOLUTIONS.middle.limit);
      setMoviesCountAdd(RESOLUTIONS.minimal.append);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  return { limit, setLimit, moviesCountAdd };
};

export default useMoviesLimit;
