import styled from 'styled-components';

export const StyledBody = styled.div`
  & {
    /* width: 100%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0% 20% 5% 20%;
  }

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 1200px) {
    & {
      margin: 0% 7% 5% 7%;
    }
  }
  @media (max-width: 800px) {
    nav {
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
    }
    nav > h1 {
      margin: 20px;
    }
  }
  @media (max-width: 800px) {
    & {
      margin: 0% 2% 5% 2%;
    }
  }
  /* Phone ~600px  */
  @media (max-width: 700px) {
    & {
      margin: 0 0 5% 0;
    }
  }
`;
