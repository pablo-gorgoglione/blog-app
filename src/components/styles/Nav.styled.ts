import styled from 'styled-components';

export const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 0px;
  font-size: 2em;
  display: flex;
  align-items: center;
  justify-content: space-around;

  a,
  span {
    text-decoration: none;
    color: white;
    cursor: pointer;
  }

  .links-container {
    display: flex;
    flex-direction: row;
    gap: 5rem;
  }
`;
