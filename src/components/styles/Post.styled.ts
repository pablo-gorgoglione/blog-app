import styled from 'styled-components';

export const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  .postcontainer {
    padding: 20px;
    border-radius: 8px;
    background-color: rgb(42, 42, 42);
    border: 2px solid rgb(70, 70, 70);
  }

  /* border: 2px solid rgb(114, 101, 67); */

  h1 {
    text-align: center;
  }

  .likecontainer {
    display: flex;
    column-gap: 5px;
    justify-content: flex-end;
    margin-bottom: 20px;
    align-items: center;
  }
  .postcontainer > div:last-child {
    margin-right: 5px;
    margin-bottom: 0;
  }

  .likeIcon {
    cursor: pointer;
    color: red;
  }

  .dislikeIcon {
    cursor: pointer;
  }

  .CommentButtons {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
    /* padding-bottom: 20px; */
  }

  .ButtonGoBack {
    border-radius: 8px;
    padding: 7px 20px;
    background-color: rgb(44, 44, 44);
    color: white;
    &:hover {
      background-color: #383838;
    }
  }
  .Content > p:last-child {
    font-size: 20px;
    text-align: justify;
  }
  .Content {
    margin: 20px;
  }
  @media (max-width: 1200px) {
    .Content > p:last-child {
      font-size: 18px;
    }
  }
  @media (max-width: 800px) {
    .Content {
      margin: 5px;
    }
    .Content > p:last-child {
      font-size: 17px;
      text-align: start;
    }
  }
  @media (max-width: 700px) {
    .postcontainer {
      border-radius: 0px;
      border-left: 0;
      border-right: 0;
      padding: 20px 10px;
    }
    .likeIcon {
      width: 21px !important;
      height: 21px !important;
    }
    .dislikeIcon {
      width: 21px !important;
      height: 21px !important;
    }
    .delete > svg {
      width: 21px !important;
      height: 21px !important;
    }
    .likecontainer {
      font-size: 21px;
    }
  }
`;
