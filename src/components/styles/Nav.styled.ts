import styled from 'styled-components';

export const StyledNav = styled.nav`
  & {
    background-color: ${({ theme }) => theme.colors.header};
    padding: 0px;
    font-size: 2em;
    display: flex;
    align-items: center;
    width: 100%;
    column-gap: 40px;
    justify-content: space-around;
  }

  a,
  span {
    text-decoration: none;
    color: white;
    cursor: pointer;
  }

  .links-container {
    display: flex;
    flex-direction: row;
    gap: 40px;
  }

  .user {
    display: flex;
    align-items: center;
  }

  @media (max-width: 300px) {
    h1 {
      font-size: 90%;
    }
    .links-container {
      display: flex;
      flex-direction: column;
    }
    .links-container > a:first-child {
      font-size: 90%;
    }
  }
`;
