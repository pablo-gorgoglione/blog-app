import styled from 'styled-components';

export const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0% 20% 0% 20%;
  }
  @media (max-width: 700px) {
    nav {
      transition: 2000ms;
      flex-direction: column;
      align-items: center;
    }
  }
`;
