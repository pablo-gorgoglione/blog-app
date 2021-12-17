import { Link } from 'react-router-dom';

interface NotFoundProps {}

export const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <>
      <h1>Not found</h1>
      <Link to=''>Home</Link>
    </>
  );
};
