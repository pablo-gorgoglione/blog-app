import styled from 'styled-components';

export const StyledNav = styled.nav`
  /* BEGIN NAV */
  background-color: ${({ theme }) => theme.colors.header};
  padding: 0px;
  font-size: 2em;
  display: flex;
  align-items: center;
  width: 100%;
  column-gap: 40px;
  justify-content: space-around;

  /* END NAV */

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

  @media (max-width: 700px) {
    div,
    div > a {
      display: none;
    }
  }
`;
