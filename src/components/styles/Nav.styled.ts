import styled from 'styled-components';

export const StyledNav = styled.nav`
  /* BEGIN NAV */
  background-color: ${({ theme }) => theme.colors.header};
  padding: 0px;
  font-size: 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 100px 0px 80px;
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
`;
