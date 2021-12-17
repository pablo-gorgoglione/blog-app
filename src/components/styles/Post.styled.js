import styled from "styled-components";

export const StyledPost = styled.div`
  padding: 20px;
  border-radius: 8px;
  background-color: rgb(42, 42, 42);
  min-width: 300px;
  border: 2px solid rgb(114, 101, 67);

  h1 {
    text-align: center;
  }
  button {
    cursor: pointer;
    display: inline-block;
  }
  input {
    display: inline-block;
    width: 100%;
    border-radius: 8px;
    margin-bottom: 20px;
    height: 25px;
  }
  .Like {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .Comment {
    padding: 15px 15px 0px 15px;
    border-radius: 8px;
    /* background-color: rgb(44, 44, 44);  color viejo*/
    background-color: rgb(53, 53, 53);
    border: 1px solid rgb(114, 101, 67);

    /* padding-bottom: 20px; */
  }
  .CommentSpan {
    cursor: pointer;
  }
  .CommentButtons {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
    /* padding-bottom: 20px; */
  }
  .CommentP {
    padding-bottom: 20px;
  }
  .CommentButtonSend {
    margin-top: 3px;
    height: 25px;
    background-color: rgb(44, 44, 44);
    border-radius: 8px;
    color: white;
  }
  .CommentInput {
    display: flex;
  }
  .DislikeButton {
    margin-left: 10px;
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
  .ButtonAddComment {
    border-radius: 8px;
    padding: 7px 20px;
    background-color: rgb(44, 44, 44);
    color: white;
    &:hover {
      background-color: #383838;
    }
  }
`;
