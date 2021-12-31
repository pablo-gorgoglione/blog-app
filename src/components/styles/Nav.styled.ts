import styled from 'styled-components';

export const StyledNav = styled.nav`
  /* BEGIN NAV */
  background-color: ${({ theme }) => theme.colors.header};
  padding: 0px;
  font-size: 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  min-width: 800px;
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
    gap: 10rem;
  }

  .user {
    display: flex;
    align-items: center;
  }
`;
