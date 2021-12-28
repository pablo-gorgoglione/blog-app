import { useContext } from 'react';
import SnackBarContext from '../context/snackBar/SnackBarContext';

export const useSnackBar = () => {
  const { snackBarState, openSnackBar } = useContext(SnackBarContext);
  return { snackBarState, openSnackBar };
};
