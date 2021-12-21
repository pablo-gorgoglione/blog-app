import styled from 'styled-components';

export const StyledChangePassword = styled.div`
  border-radius: 8px;
  border: 2px solid rgb(70, 70, 70);

  input {
    margin-bottom: 20px;
  }
  .inputpassrepeat {
    /* margin-bottom: 20px; */
  }
  .tittleAndButton {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 40px;
    /* justify-content: space-between; */
  }
  .changebtn {
    margin-left: 50.5%;
    align-self: center;
    border-radius: 8px;
    padding: 5px 20px;
    background-color: white;
    color: black;
    &:hover {
      background-color: #b3b1b1;
      cursor: pointer;
    }
  }
  .submitbtn {
    margin-left: 150px;
    align-self: center;
    border-radius: 8px;
    padding: 5px 20px;
    background-color: rgb(73, 73, 73);
    color: white;
    &:hover {
      background-color: #383838;
      cursor: pointer;
    }
  }
`;
