import styled from 'styled-components';

export const StyledSettings = styled.div`
  & {
    width: 100%;
  }

  .motiondiv {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
  }
  .motiondiv > div {
    width: 70%;
    border-radius: 8px;
    border: 2px solid rgb(70, 70, 70);
    padding: 20px;
  }
  h2 {
    width: fit-content;
  }

  .tittle {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    column-gap: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .buttonchange {
    filter: brightness(85%);
    /* padding: 0.6rem 2rem; */
    border-width: 0.1rem;
    border-color: white;
    border-radius: 12px;
    color: #eee;
    cursor: pointer;
    font-size: 14px;
    height: 50px;
    width: 150px;
    background-color: black;
  }
  .buttoncancel {
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
    width: 150px;
    background-color: black;
    &:hover {
      filter: brightness(100%);
      background-color: red;
    }
    transition: 200ms;
  }
  .container-changeUsername {
    padding: 20px;
    padding-bottom: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 20px;
  }
  .container-changeUsername > button {
    width: 80px;
  }

  input {
    background-color: black;
    color: white;
    border-radius: 12px;
    border: 1px solid grey;
    box-sizing: border-box;
    font-size: 14px;
    height: 50px;
    outline: 0;
    padding: 4px 20px 0;
    width: 100%;
  }

  #submitDiv {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .buttonSubmit {
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
    width: 80px;
  }

  .inputs-div {
    padding: 20px;
    padding-bottom: 0;
    display: flex;
    justify-content: center;
    flex-direction: row;
    column-gap: 20px;
    justify-content: flex-start;
  }

  .inputs-div + div {
    padding-top: 12px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .inputs-div > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  span {
    color: red;
    font-size: 12px;
  }
  .delete {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .delete > p {
    padding-left: 20px;
    padding-right: 20px;
  }
  .delete > button {
    width: 80px;
    height: 30px;
    border-width: 0.1rem;
    border-color: red;
    max-width: 20rem;
    background-color: rgb(33, 33, 33);
    border-radius: 12px;
    color: red;
    cursor: pointer;
    font-size: 14px;
  }
  @media (max-width: 800px) {
    .tittle {
      flex-direction: column;
      padding: 0;
    }
    .motiondiv > div {
      padding: 0;
      padding-bottom: 20px;
    }
    .buttoncancel {
      height: 50px;
      width: 150px;
    }

    .inputs-div,
    .container-changeUsername {
      margin-top: 10px;
      flex-direction: column;
      row-gap: 30px;
      align-items: center;
    }
  }
`;
