import styled from 'styled-components';

interface props {
  isLiked: boolean;
}
export const StyledPostCard = styled.div<props>`
  & {
    cursor: pointer;
    border-radius: 8px;
    margin-bottom: 20px;
    background-color: rgb(42, 42, 42);
    padding: 20px;
    border: 2px solid rgb(70, 70, 70);
    transition: 0.3s;
    &:hover {
      border: 2px solid white;
    }
  }
  .title-div {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  h4 {
    width: fit-content;
    margin: 0;
  }
  p {
    display: inline-block;
  }
  .last-div {
    display: flex;
    justify-content: space-between;
    & > ul {
      padding: 0;
      margin: 0;
      list-style: none;
    }
  }

  .last-div > ul,
  .icons {
    display: flex;
    flex-direction: row;
    column-gap: 10px;
  }
  .icons > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 2px;
  }
  .icons > div:last-child > svg {
    color: ${(props) => (props.isLiked ? 'red' : '')};
  }
  .tag {
    border: 1px solid rgb(70, 70, 70);
    background-color: rgb(35 35 35);
    border-radius: 8px;
    padding: 6px;
    width: fit-content;
    transition: 100ms;
    &:hover {
      border-color: white;
    }
  }

  .authorOptions {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    column-gap: 20px;
  }
  .authorOptions > div {
    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 850px) {
    .title-div {
      flex-direction: column;
      row-gap: 20px;
    }
    .title-div > b {
      color: grey;
    }
  }
  @media (max-width: 450px) {
    .last-div {
      row-gap: 20px;
      flex-direction: column;
      align-items: center;
    }
  }
`;
