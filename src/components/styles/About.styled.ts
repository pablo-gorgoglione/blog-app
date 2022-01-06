import styled from 'styled-components';

export const StyledAbout = styled.div`
  padding: 40px;
  border-radius: 8px;
  background-color: rgb(42, 42, 42);
  border: 2px solid rgb(70, 70, 70);
  .main-container {
    display: flex;
    flex-direction: column;
    row-gap: 40px;
  }
  a {
    text-decoration: none;
    color: rgb(160, 160, 160);

    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
  a > svg {
    color: white;
  }
  h2 {
    margin: 0;
    text-align: center;
    padding-bottom: 20px;
  }
  .link-container > div:first-child {
    display: flex;
    flex-direction: row;
    column-gap: 11px;
    justify-content: flex-start;
    align-items: center;
  }
  .link-container > div:first-child > div:last-child {
    display: flex;
    flex-direction: row;
    column-gap: 10px;
  }
  .link-container {
    display: flex;
    flex-direction: row;
    column-gap: 15px;
    justify-content: space-between;
    align-items: center;
  }
  svg {
    width: 35px;
    height: 35px;
  }
`;
