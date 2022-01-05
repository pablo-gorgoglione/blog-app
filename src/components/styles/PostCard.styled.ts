import styled from 'styled-components';

interface props {
  isLiked: boolean;
}
export const StyledPostCard = styled.div<props>`
  border-radius: 8px;
  background-color: rgb(42, 42, 42);
  padding: 20px;
  /* border: 2px solid rgb(114, 101, 67); */
  border: 2px solid rgb(70, 70, 70);
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    border: 2px solid white;
  }
  h4 {
    width: fit-content;
  }
  p {
    display: inline-block;
  }
  .icons {
    display: flex;
    justify-content: flex-end;
    column-gap: 15px;
  }
  .icons > div {
    display: flex;
    align-items: center;
    column-gap: 3px;
  }
  .icons > div:last-child > svg {
    color: ${(props) => (props.isLiked ? 'red' : '')};
  }
`;
