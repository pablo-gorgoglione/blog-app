import styled from 'styled-components';

export const StyledAuthorPostList = styled.div`
  & {
    width: 100%;
  }
  & > div:first-child {
    width: 100%;
    display: flex;
    column-gap: 30px;
    margin-bottom: 20px;
  }
  button {
    cursor: pointer;
    color: rgb(150, 150, 150);
    background-color: rgb(42, 42, 42);
    border: 2px solid rgb(70, 70, 70);
    border-radius: 8px;
    font-size: 20px;
    padding: 8px 19px;
    transition: 100ms;
    &:hover {
      border-color: white;
    }
  }
  .active {
    color: white;
  }
  .author-postcard {
    border-radius: 8px;
    background-color: rgb(42, 42, 42);
    padding: 20px;
    border: 2px solid rgb(70, 70, 70);
    cursor: auto;
  }
`;
