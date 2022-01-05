import { createContext, useReducer } from 'react';
import snackBarReducer from './SnackBarReducer';

interface ISnackBarState {
  isError: boolean;
  isOpen: boolean;
  text: string;
}

interface ISnackBarContext {
  snackBarState: ISnackBarState;
  openSnackBar: (text: string, isError: boolean) => void;
}

const SnackBarContext = createContext<ISnackBarContext>({} as ISnackBarContext);

interface props {
  children: JSX.Element | JSX.Element[];
}

export const SnackBarProvider = ({ children }: props) => {
  const initialState: ISnackBarState = {
    isError: false,
    isOpen: false,
    text: '',
  };

  const [snackBarState, dispatch] = useReducer(snackBarReducer, initialState);

  const openSnackBar = (text: string, isError: boolean) => {
    if (snackBarState.isOpen) {
      dispatch({ type: 'SET_ISOPEN', payload: false });
      dispatch({ type: 'SET_TEXT', payload: '' });
      dispatch({ type: 'SET_ISERROR', payload: false });
    }
    dispatch({ type: 'SET_TEXT', payload: text });
    dispatch({ type: 'SET_ISERROR', payload: isError });
    dispatch({ type: 'SET_ISOPEN', payload: true });
    setTimeout(() => {
      dispatch({ type: 'SET_ISOPEN', payload: false });
      dispatch({ type: 'SET_TEXT', payload: '' });
      dispatch({ type: 'SET_ISERROR', payload: false });
    }, 5000);
  };

  return (
    <SnackBarContext.Provider value={{ openSnackBar, snackBarState }}>
      {children}
    </SnackBarContext.Provider>
  );
};

export default SnackBarContext;
