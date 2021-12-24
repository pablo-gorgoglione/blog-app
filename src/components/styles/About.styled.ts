import styled from 'styled-components';

export const StyledAbout = styled.div`
  padding: 20px;
  border-radius: 8px;
  background-color: rgb(42, 42, 42);
  border: 2px solid rgb(70, 70, 70);
  /* border: 2px solid rgb(114, 101, 67); */
  min-width: 300px;
  a {
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
    text-decoration: underline;
    &:hover {
    }
  }
  h2 {
    margin: 0;
    text-align: center;
    padding-bottom: 20px;
  }
  .LinkContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .LinkIcons {
  }
`;
