import styled from 'styled-components';

export const StyledCommentList = styled.div`
  /* Main div */
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  word-wrap: break-word;

  .general-container {
    border-radius: 8px;
    border: 2px solid rgb(70, 70, 70);
  }
  .header-container {
    display: flex;
    flex-direction: column;
    padding: 30px;
    row-gap: 30px;
  }
  .header-container > span {
    cursor: pointer;
  }
  .main-container > p {
    margin: 0;
  }
  button {
    transition: 200ms;
    vertical-align: middle;
    padding: 0.6rem 2rem;
    background-color: black;
    color: white;
    border-radius: 0.8rem;
    border-width: 0.1rem;
    border-color: white;
    max-width: 20rem;
    cursor: pointer;
  }
  form {
    border: 0.1em solid rgb(70, 70, 70);
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    resize: vertical;
    overflow: auto;
    min-height: 91px;
  }
  form > input {
    &:focus {
      outline: none;
    }
    background-color: black;
    color: white;
    border: none;
    height: 100%;
    width: 100%;
    font-size: 15px;
    padding: 0;
    word-break: break-word;
  }

  input[type='text'] {
    padding: 20px 25px;
    box-sizing: border-box;
  }

  form > div {
    background-color: rgb(32, 32, 32);
    display: flex;
    border: none;
    justify-content: flex-end;
    border: 0;
    border-bottom-left-radius: 8px;
  }
  form > div > button {
    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 10px;
    font-size: 10px;
    height: 20px;
    width: 60px;
    padding: 0;
    border: none;
    color: black;
    background-color: white;
  }
`;
