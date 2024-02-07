import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '@/stores';

// Custom hook to bind action creators to dispatch
export const useActions = (): typeof actions => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
