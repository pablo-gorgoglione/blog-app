import styled from 'styled-components';

export const StyledDeleteAccount = styled.div`
  /* main div */
  border-radius: 8px;
  border: 2px solid red;
  padding: 20px;
  /* end main div  */
  .tittle {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .tittle > h2 {
    margin-left: 20px;
  }

  .tittle > div {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
  .buttonchange {
    filter: brightness(85%);
    vertical-align: middle;
    padding: 0.6rem 2rem;
    border-width: 0.1rem;
    border-color: red;
    max-width: 20rem;
    border-radius: 12px;
    color: #eee;
    cursor: pointer;
    font-size: 14px;
    height: 50px;
    width: 100%;
    background-color: black;
  }
  .buttoncancel {
    filter: brightness(85%);
    vertical-align: middle;
    padding: 0.6rem 2rem;
    border-width: 0.1rem;
    max-width: 20rem;
    background-color: #08d;
    border-radius: 12px;
    color: #eee;
    cursor: pointer;
    font-size: 14px;
    height: 50px;
    width: 100%;
    background-color: black;
    &:hover {
      filter: brightness(100%);
      background-color: blue;
    }
    transition: 200ms;
  }
  .delete {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .delete > button {
    padding: 0.1rem 1rem;
    border-width: 0.1rem;
    border-color: white;
    max-width: 20rem;
    background-color: red;
    border-radius: 12px;
    color: #eee;
    cursor: pointer;
    font-size: 14px;
    height: 30px;
    width: 100%;
  }
`;
