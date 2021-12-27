import styled from 'styled-components';

export const StyledRegister = styled.nav`
  padding: 20px;
  margin: auto;
  width: 230px;
  background-color: rgb(42, 42, 42);
  border-radius: 8px;
  border: 2px solid rgb(70, 70, 70);
  border-color: white;

  .container,
  .password-div,
  .username-div,
  .repeatpass {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .password-div {
    margin-top: 20px;
  }
  .repeatpass {
    margin-top: 20px;
  }
  button {
    margin-top: 20px;
    transition: 200ms;
    &:hover {
      background-color: grey;
    }
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
    border-radius: 0.8rem;
    border-color: black;
    color: black;
    height: 1.6rem;
    width: 11rem;
    text-align: center;
    font-size: 18px;
    background-color: white;
  }
  span {
    font-size: 12px;
    color: red;
  }
  h3,
  p {
    margin: 0;
    text-align: center;
  }
`;
