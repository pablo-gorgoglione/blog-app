import styled from 'styled-components';

export const StyledCreatePost = styled.div`
  & {
    padding: 40px;
    width: 100%;
    background-color: rgb(42, 42, 42);
    border: 2px solid rgb(70, 70, 70);
    border-radius: 8px;
  }
  .createpost-container {
    display: block;
  }
  .error-message {
    margin: 0;
    margin-bottom: 10px;
    font-size: 13px;
    color: red;
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
  button:disabled {
    border-color: black;
    color: grey;
  }

  .cancel-edit {
    width: fit-content;
    margin-left: 15px;
    color: red;
    border-color: red;
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
    margin-bottom: 0;
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
  button {
    margin-left: 20px;
    height: 25px;
    width: 50px;
    border-width: 0.1rem;
    border-color: white;
    max-width: 20rem;
    background-color: rgb(33, 33, 33);
    border-radius: 12px;
    color: #eee;
    cursor: pointer;
    font-size: 13px;
  }
  .tags-div > div > button {
    height: 35px;
    width: 60px;
    margin-right: 30px;
    margin-left: 0px;
  }
  .createpost-container > div:last-child {
    padding-top: 20px;
    display: flex;
    align-items: center;
    column-gap: 20px;
  }
  @media (max-width: 700px) {
    & {
      width: 100%;
      margin: 0;
      padding: 0;
      border-radius: 0;
      border-left: 0;
      border-right: 0;
    }
    .createpost-container {
      padding: 20px 30px 20px 20px;
    }
    h2,
    h3 {
      width: fit-content;
    }
    ul {
      display: flex;
      flex-direction: column;
      row-gap: 1%;
    }
    .title,
    .content {
      width: 98%;
    }
  }
`;
