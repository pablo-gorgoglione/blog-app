import styled from 'styled-components';

export const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0% 20% 0% 20%;

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 700px) {
    nav {
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
    }
  }
`;
