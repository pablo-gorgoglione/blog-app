import spinner from './assets/spinner.gif';
interface SpinnerProps {}

export const Spinner: React.FC<SpinnerProps> = () => {
  return (
    <img
      alt='loading'
      style={{ width: '100px', margin: 'auto', display: 'block' }}
      src={spinner}
    ></img>
  );
};
