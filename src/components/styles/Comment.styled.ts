import styled from 'styled-components';

export const StyledComment = styled.div`
  /*  */
  padding: 30px 5px;
  border-color: white;
  border-width: 2px;
  margin-left: 10;
  border-top: 2px solid rgb(70, 70, 70);

  /*  */
  .container {
    margin-left: 20px;
    margin-right: 20px;
  }
  .usernamediv {
    display: flex;
    /* justify-content */
    flex-direction: row;
    align-items: center;
    column-gap: 10px;
  }
  .usernamediv > div {
    display: flex;
    column-gap: 5px;
    align-items: center;
  }
  .usernamediv > span {
    font-size: 12px;
    color: grey;
  }
  .mediv {
    padding: 5px;
    border-radius: 15px;
    background-color: rgb(38, 38, 38);
  }
  .mediv > svg {
    margin-left: 3px;
  }

  .delete {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
  button {
    height: 20px;
  }
  .btns {
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .btns > div {
    display: flex;
    align-items: center;
    column-gap: 5px;
  }
  .btns > div:last-child > button {
    height: 100%;
    text-align: center;
    color: red;
  }
  .btns > div:last-child {
    border: 2px solid rgb(70, 70, 70);
  }

  .content-container {
    margin-left: 50px;
    font-size: 18px;
  }
  svg {
    cursor: pointer;
  }
`;
