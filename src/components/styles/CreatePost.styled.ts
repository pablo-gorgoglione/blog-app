import styled from 'styled-components';

export const StyledCreatePost = styled.div`
  & {
    padding: 40px;
    width: 100%;
    background-color: rgb(42, 42, 42);
    border: 2px solid rgb(70, 70, 70);
    border-radius: 8px;
  }
  h2 {
    margin-top: 0;
  }
  input,
  textarea {
    border-radius: 8px;
    padding: 5px;
    background-color: rgb(35 35 35);
    color: white;
    border: 1px solid rgb(70, 70, 70);
    white-space: normal;
  }
  .title {
    font-size: 1.17em;
  }

  .title,
  .content {
    width: 100%;
  }
  .content {
    height: 300px;
    resize: none;
  }
  ul {
    display: flex;
    margin-top: 15px;
    padding: 0;
    column-gap: 1%;
  }
  li {
    list-style: none;
    font-size: 15px;
    margin-right: 8px;
  }
  .tag-item {
    border-radius: 8px;
    background-color: rgb(35 35 35);
    padding: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 1%;
    align-items: center;
    width: fit-content;
    min-width: 90px;
    border: 1px solid rgb(70, 70, 70);
    margin-bottom: 8px;
    transition: 100ms;
    &:hover {
      border-color: white;
    }
  }
  .tag-item > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 5px;
  }
  .tag {
    min-width: 50px;
    width: 20%;
  }
  svg {
    cursor: pointer;
    width: 12px;
    height: 12px;
  }
  @media (max-width: 700px) {
    ul {
      display: flex;
      flex-direction: column;
      row-gap: 1%;
    }
  }
`;
