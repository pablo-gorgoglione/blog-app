import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: block;
  background-color: ${({ theme }) => theme.colors.header};
  padding: 0px;
  font-size: 1.8em;
  /* nuevos */
  /* width: min(95rem, 95%);
  margin: 0px auto; */
  .BlogAppLink {
    margin: 0;
    transition: 0.3s;
  }
  .ButtonUsername {
    align-self: center;
    border-radius: 8px;
    padding: 7px 20px;
    background-color: rgb(73, 73, 73);
    color: white;
    &:hover {
      background-color: #383838;
      cursor: pointer;
    }
  }
  .loginSpan {
    font-size: 1em;
    transition: 0.3s;
  }
  .spanInDiv {
    margin-top: 28px;
  }
  .spanOptions {
    margin-left: 10px;
  }
  div {
    margin-left: 50px;
    margin-right: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  /* viejo */
  a {
    color: white;
    text-decoration: none;
    margin: 50px 50px;
    transition: 0.3s;
  }

  a:hover {
    color: #b8b8b8;
  }

  span {
    cursor: grab;
    &:hover {
      cursor: pointer;
      color: #b8b8b8;
    }
    cursor: grab;
    color: white;
    font-size: 0.7em;
  }
`;
