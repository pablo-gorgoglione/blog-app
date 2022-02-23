import styled from 'styled-components';

export const StyledPagination = styled.div`
  & {
    display: flex;
    margin-bottom: 20px;
    justify-content: center;
  }
  ul {
    display: flex;
    flex-direction: row;
    column-gap: 15px;
    list-style-type: none;
    padding: 0;
  }
  li {
    cursor: pointer;
    border: 2px solid rgb(85, 85, 85);
    color: rgb(85, 85, 85);
    border-radius: 5px;
    padding: 0;
    margin: 0;
    height: 30px;
    width: 30px;
    display: table;
    transition: 100ms;
    &:hover {
      border-color: white;
      color: white;
      /* background-color: #494949; */
    }
  }
  li > p {
    display: table-cell;
    margin: 0;
    padding: 0;
    vertical-align: middle;
    text-align: center;
  }
  .active {
    border-color: white;
    color: white;
  }
`;
