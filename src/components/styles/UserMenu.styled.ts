import styled from 'styled-components';

export const StyledUserMenu = styled.nav<{ buttonWidth: number }>`
  ul {
    padding: 0%;
    margin: 0%;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 7px;
    align-items: baseline;
  }
  li {
    transition: 200ms;
    &:hover {
      background-color: #494949;
    }
    width: 100%;
    border-radius: 0.35rem;
  }
  li div {
    padding: 0.4rem;
    font-size: 1rem;
    margin: 0;
    text-align: center;
  }

  .dropdown {
    position: relative;
  }

  .dropdown button {
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
    /* width: 140px; */
    width: calc(${({ buttonWidth }) => buttonWidth.toString() + 'px'} - 1.5rem);
    /* width: calc(140px - 1.5rem); */
    margin: 0;
    top: calc(100% + 0.2rem);
    padding: 0.75rem;
    border-radius: 0.55rem;
    box-shadow: 0 2px 15px 0 rgb(81, 83, 81);
    background-color: black;
  }

  .dropdown-menu.active {
    opacity: 1;
  }

  .logout {
    &:hover {
      background-color: red;
    }
    transition: 200ms;
    border-radius: 0.35rem;
  }
`;
