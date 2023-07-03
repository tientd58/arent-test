import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { fetchMealHistory } from '../stores/TopPage/TopPageAPIs';

export const useTopPage = () => {
  const dispatch = useDispatch();
  
  const handleFetchMealHistory = useCallback(() => {
    dispatch(fetchMealHistory());
  }, [dispatch]);

  return {
    handleFetchMealHistory,
  }
};
