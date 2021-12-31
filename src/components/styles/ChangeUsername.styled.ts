import styled from 'styled-components';

export const StyledChangeUsername = styled.div`
  /* main div */
  border-radius: 8px;
  border: 2px solid rgb(70, 70, 70);
  padding: 20px;
  /* end main div  */

  .tittle {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .tittle > h2 {
    margin-left: 20px;
  }
  .tittle > div {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }

  .btnChange {
    filter: brightness(85%);
    vertical-align: middle;
    padding: 0.6rem 2rem;
    border-width: 0.1rem;
    border-color: white;
    max-width: 20rem;
    border-radius: 12px;
    color: #eee;
    cursor: pointer;
    font-size: 14px;
    height: 50px;
    width: 100%;
    background-color: black;
  }
  .btnCancel {
    filter: brightness(85%);
    vertical-align: middle;
    padding: 0.6rem 2rem;
    border-width: 0.1rem;
    max-width: 20rem;
    background-color: #08d;
    border-radius: 12px;
    color: #eee;
    cursor: pointer;
    font-size: 14px;
    height: 50px;
    width: 100%;
    background-color: black;
    &:hover {
      filter: brightness(100%);
      background-color: red;
    }
    transition: 200ms;
  }

  form {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 22px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    column-gap: 20px;
    justify-content: flex-start;
  }

  form + div {
    padding-top: 12px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  form > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    background-color: #303245;
    border-radius: 12px;
    font-size: 15px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    font-size: 14px;
    height: 50px;
    outline: 0;
    padding: 4px 20px 0;
    width: 100%;
  }
  .btnSubmit {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .btnSubmit > button {
    padding: 0.1rem 1rem;
    border-width: 0.1rem;
    border-color: white;
    max-width: 20rem;
    background-color: rgb(33, 33, 33);
    border-radius: 12px;
    color: #eee;
    cursor: pointer;
    font-size: 14px;
    height: 30px;
    width: 100%;
  }

  span {
    color: red;
    font-size: 12px;
  }
  /* asdas */
`;
