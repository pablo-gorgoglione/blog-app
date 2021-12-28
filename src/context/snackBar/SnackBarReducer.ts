interface ISnackBarState {
  isOpen: boolean;
  text: string;
}
type SnackBarAction =
  | {
      type: 'SET_ISOPEN';
      payload: boolean;
    }
  | { type: 'SET_TEXT'; payload: string };

const snackBarReducer = (state: ISnackBarState, action: SnackBarAction) => {
  switch (action.type) {
    case 'SET_ISOPEN':
      return {
        ...state,
        isOpen: action.payload,
      };
    case 'SET_TEXT':
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
};

export default snackBarReducer;
