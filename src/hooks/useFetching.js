import { useState } from 'react';

const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetching = async (args) => {
    try {
      setError(null);
      setIsLoading(true);
      await callback(args);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };
  return [fetching, isLoading, error];
};

export default useFetching;
