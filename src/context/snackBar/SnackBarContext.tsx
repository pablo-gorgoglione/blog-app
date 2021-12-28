import { createContext, useReducer } from 'react';
import snackBarReducer from './SnackBarReducer';

interface ISnackBarState {
  isOpen: boolean;
  text: string;
}

interface ISnackBarContext {
  snackBarState: ISnackBarState;
  openSnackBar: (text: string) => void;
}

const SnackBarContext = createContext<ISnackBarContext>({} as ISnackBarContext);

interface props {
  children: JSX.Element | JSX.Element[];
}

export const SnackBarProvider = ({ children }: props) => {
  const initialState: ISnackBarState = {
    isOpen: false,
    text: '',
  };

  const [snackBarState, dispatch] = useReducer(snackBarReducer, initialState);

  const openSnackBar = (text: string) => {
    dispatch({ type: 'SET_TEXT', payload: text });
    dispatch({ type: 'SET_ISOPEN', payload: true });
    setTimeout(() => {
      dispatch({ type: 'SET_ISOPEN', payload: false });
      setTimeout(() => {
        dispatch({ type: 'SET_TEXT', payload: '' });
      }, 2000);
    }, 5000);
  };

  return (
    <SnackBarContext.Provider value={{ openSnackBar, snackBarState }}>
      {children}
    </SnackBarContext.Provider>
  );
};

export default SnackBarContext;
