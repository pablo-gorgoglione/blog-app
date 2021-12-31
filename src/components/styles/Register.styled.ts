import styled from 'styled-components';

export const StyledRegister = styled.div`
  /* main div */
  padding: 20px;
  margin: auto;
  width: 260px;
  background-color: black;
  border: 3px solid #30363d;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  align-items: center;

  /* main div */

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 12px;
  }
  div {
    display: flex;
    flex-direction: column;
    row-gap: 9px;
  }

  button {
    display: absolute;
    &:hover {
      -moz-box-shadow: 0 0 5px 5px #30363d;
      -webkit-box-shadow: 0 0 5px 5px#30363d;
      box-shadow: 0 0 3px 3px #30363d;
      /* border: 3px solid #30363d; */
    }
    margin-top: 15px;
    transition: 200ms;
    vertical-align: middle;
    padding: 0.6rem 2rem;
    background-color: rgb(33, 33, 33);
    color: #eee;
    border-radius: 0.8rem;
    border-width: 0.12rem;
    border-color: black;
    max-width: 20rem;
    cursor: pointer;
  }
  input {
    background-color: #303245;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    font-size: 14px;
    height: 35px;
    outline: 0;
    padding: 4px 18px 2px;
    width: 100%;
    &:focus {
      -moz-box-shadow: 0 0 5px 5px #888;
      -webkit-box-shadow: 0 0 5px 5px#888;
      box-shadow: 0 0 2px 2px #888;
    }
  }

  span {
    font-size: 12px;
    color: red;
  }

  label {
    margin-left: 5px;
    font-size: 22px;
  }

  p {
    margin: 0;
    margin-left: 5px;
  }
  a {
    text-decoration: none;
    color: grey;
    &:hover {
      text-decoration: underline;
    }
  }
  .text {
    margin-top: 10px;
  }
  .text > p {
    font-size: 12px;
  }
`;
