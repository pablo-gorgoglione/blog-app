import styled from 'styled-components';

export const StyledCommentList = styled.div`
  /* Main div */
  & {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }

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

  .div-input {
    border: 0.1em solid rgb(70, 70, 70);
    display: flex;
    background-color: black;
    color: white;
    justify-content: space-between;
    flex-direction: column;
    resize: vertical;
    overflow: auto;
    min-height: 60px;
    word-break: break-word;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
  }

  .div-input ~ div {
    background-color: rgb(32, 32, 32);
    display: flex;
    border: none;
    justify-content: flex-end;
    border: 0;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .div-input ~ div > button {
    margin: 5px;
    font-size: 10px;
    height: 20px;
    width: 60px;
    padding: 0;
    border: none;
    color: black;
    background-color: white;
  }
`;
