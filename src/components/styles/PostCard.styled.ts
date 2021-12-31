import styled from 'styled-components';

export const StyledPostCard = styled.div`
  border-radius: 8px;
  background-color: rgb(42, 42, 42);
  padding-left: 20px;
  padding-right: 20px;
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
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .container > div {
    display: flex;
    justify-content: flex-end;
    column-gap: 5px;
  }
`;
