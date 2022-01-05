import styled from 'styled-components';

export const StyledComment = styled.div`
  /*  */
  padding: 20px;
  border-color: white;
  border-width: 2px;
  margin-left: 10;
  border-top: 2px solid rgb(70, 70, 70);

  /*  */
  .likecontainer {
    margin: 0;
  }
  .container {
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
    height: fit-content;
    display: flex;
    align-items: center;
    column-gap: 20px;
    justify-content: flex-end;
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
  }

  .content-container {
    font-size: 18px;
  }
  .content-container > p {
    margin-left: 30px;
  }

  .likeIcon {
    cursor: pointer;
    color: red;
  }

  .dislikeIcon {
    cursor: pointer;
  }
  .delete > svg {
    cursor: pointer;
  }
`;
