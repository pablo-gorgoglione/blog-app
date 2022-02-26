import styled from 'styled-components';

export const StyledUserMenu = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
    margin: 15px 0px 15px 0px;
    width: 100%;
  }
  li {
    display: flex;
    align-items: center;
    padding: 5px;
    transition: 200ms;
    height: 30px;
    &:hover {
      background-color: #494949;
    }
  }
  li div {
    cursor: pointer;
    font-size: 1rem;
    margin: 0;
    text-align: left;
    margin-left: 20px;
    display: inline-block;
  }
  div > div {
    display: flex;
    align-items: center;
    column-gap: 10px;
  }

  .dropdown {
    position: relative;
  }
  .dropdown > div:first-child {
    cursor: pointer;
    justify-content: center;
  }

  .dropdown button {
    filter: brightness(85%);
    &:hover {
      filter: brightness(100%);
      background-color: rgb(33, 33, 33);
    }
    transition: 200ms;
    vertical-align: middle;
    padding: 0.6rem 2rem;
    background-color: black;
    color: white;
    border-radius: 0.8rem;
    border-width: 0.1rem;
    border-color: white;
    max-width: 20rem;
    cursor: pointer;
  }

  .dropdown-menu {
    position: absolute;
    right: 5px;
    top: calc(100% + 0.5rem);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    column-gap: 10px;
    width: 160px;
    margin: 0;
    box-shadow: 0 2px 15px 0 rgb(81, 83, 81, 0.5);
    background-color: black;
    border-radius: 6px;
    border: 1px solid #30363d;
  }
  .dropdown-menu > div > p {
    font-size: 18px;
    margin: 0;
    color: white;
  }
  .dropdown-menu > div > p:first-child {
    font-size: 15px;

    margin-bottom: 10px;
    color: rgb(163, 163, 163);
  }
  .dropdown-menu > div:first-child {
    display: flex !important;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin: 20px 0px 20px 20px;
  }

  .dropdown-menu.active {
    opacity: 1;
  }

  .logout {
    &:hover {
      background-color: red;
    }
    transition: 200ms;
  }

  .divider {
    padding: 0 !important;
    display: block;
    height: 0;
    border-top: 1px solid #30363d;
    width: 100%;
  }

  .dropdown-author {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .dropdown-author > div:nth-child(2) > p {
    font-size: 15px;
    margin-left: 20px;
    margin-bottom: 0px;
    color: rgb(163, 163, 163);
  }
  @media (max-width: 700px) {
    .dropdown > div:first-child {
      margin-bottom: 20px;
    }
    .dropdown-menu {
      align-items: center;
      position: static;
      width: 100vw;
      border-radius: 0;
      border-right: 0;
      border-left: 0;
    }
    .dropdown-menu > div:first-child {
      margin: 10px 0 10px 0;

      display: flex;
      flex-direction: row;
      align-items: flex-end;
    }
    .dropdown-menu > div:first-child > p:first-child {
      margin: 0;
    }
    ul {
      margin: 5px 0 5px 0;
      align-items: center;
    }
    .dropdown-author {
      /* align-items: center; */
    }
    li {
      width: 100vw;
    }
    li > div {
      margin: calc(100vw - 90vw);
    }
  }
`;
