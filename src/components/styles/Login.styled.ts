import styled from 'styled-components';

export const StyledLogin = styled.div`
  margin: auto;
  width: 230px;
  padding: 20px;
  background-color: rgb(42, 42, 42);
  border-radius: 8px;
  border: 2px solid rgb(70, 70, 70);
  border-color: white;

  label {
    font-size: 22px;
  }
  button {
    margin-top: 10px;
    &:hover {
      background-color: grey;
    }
    transition: 200ms;
    vertical-align: middle;
    padding: 0.6rem 2rem;
    background-color: white;
    color: black;
    border-radius: 0.8rem;
    border-width: 0.12rem;
    border-color: black;
    max-width: 20rem;
    cursor: pointer;
  }

  input {
    margin-top: 10px;
    border-radius: 0.8rem;
    border-color: black;
    color: black;
    height: 1.6rem;
    width: 11rem;
    text-align: center;
    font-size: 18px;
    background-color: white;
  }

  a {
    text-decoration: none;
    color: rgb(252, 215, 3);
  }
  .username-div,
  .password-div {
    margin-top: 20px;
  }

  .container,
  .password-div,
  .username-div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .container {
    padding: 10px;
  }
`;
