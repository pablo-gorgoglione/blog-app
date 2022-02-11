import { StyledPagination } from './styles/Pagination.styled';

interface Props {
  postsPerPage: number;
  totalPosts: number;
  paginate: (number: number) => void;
}

const Pagination = ({ postsPerPage, totalPosts, paginate }: Props) => {
  const pageNumbers: Array<number> = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <StyledPagination>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number.toString()}>
            <p onClick={() => paginate(number)}>{number}</p>
          </li>
        ))}
      </ul>
    </StyledPagination>
  );
};

export default Pagination;
