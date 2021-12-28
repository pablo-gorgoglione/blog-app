import styled from 'styled-components';

export const StyledSnackBar = styled.div`
  position: fixed;
  top: 90%;
  display: flex;
  left: 50%;
  padding: 12px 12px;
  background-color: rgb(29, 155, 240);
  color: white;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  align-items: center;
  p {
    margin: 0;
  }
  box-shadow: 0 4px 8px grey;
`;
