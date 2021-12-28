import spinner from './assets/spinner.gif';
interface SpinnerProps {}

export const Spinner: React.FC<SpinnerProps> = () => {
  return (
    <img
      alt='loading'
      style={{
        position: 'fixed',
        width: '100px',
        margin: 'auto',
        display: 'block',
        top: '40%',
        left: '46%',
      }}
      src={spinner}
    ></img>
  );
};
