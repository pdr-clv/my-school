import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const openclosebtnstyles = css`
  line-height: 38px;
  display: none;

  span {
    border-radius: 2px;
    cursor: pointer;
    font-size: 1.4em;
    padding: 2px 5px;

    &:hover {
      font-weight: bold;
    }
  }

  @media screen and (max-width: 768px) {
    display: inline;
  }
`;

const getSelected = ({ to, currentroute }) => {
  if (to === currentroute) {
    return selected;
  }
};

const getHeaderStylesHome = ({ currentroute }) => {
  if (currentroute === '/') return headerStylesHome;
};

const headerStylesHome = css`
  position: fixed;
  width: 100%;
  background-color: transparent;
  color: white;
  //box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
  z-index: 100;
  box-shadow: none;
`;

const getColourHome = ({ currentroute }) => {
  if (currentroute === '/') return whitecolour;
};

const whitecolour = css`
  color: white;
`;

const selected = css`
  background-color: rgba(256, 256, 256, 0.3);
  color: rgb(254, 0, 50);
`;

const StyleNavElement = css`
  color: black;
  ${getColourHome}
  font-size: 1em;
  text-align: center;
  padding: 14px;
  text-decoration: none;
  ${getSelected}

  &:hover {
    ${selected}
  }

  @media screen and (max-width: 768px) {
    border-bottom: 1px solid black;
  }
`;

export const HeaderStyles = styled.header`
  position: sticky;
  background-color: white;
  color: black;
  height: 50px;
  box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
  ${getHeaderStylesHome}

  @media screen and (max-width: 768px) {
    height: 40px;
  }
`;

export const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1250px) {
    width: 95%;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    height: 38px;
    width: 90%;
    justify-content: space-between;
  }
`;

export const LinksContainer = styled.div`
  display: inline;
`;

export const OpenBtn = styled.div`
  ${openclosebtnstyles}
  span {
    background: rgba(256, 256, 256, 0.5);
    margin-left: 10px;
  }
`;

export const Logo = styled.div`
  text-align: center;
  font-size: 1.6em;
  margin: auto 0;
  font-weight: bold;
  align-items: center;
  line-height: 1.6em;
`;

export const CloseBtn = styled.div`
  ${openclosebtnstyles}
  span {
    float: right;
    margin-right: 15px;
    font-size: 2em;
  }
`;

export const MenuLinks = styled.div`
  letter-spacing: -1px;
  text-transform: uppercase;
  display: flex;

  @media screen and (max-width: 768px) {
    overflow-y: scroll;
    background-color: rgb(254, 0, 50);
    top: 0;
    left: ${({ showNav }) => (showNav ? '0' : '-50%')};
    position: fixed;
    flex-direction: column;
    width: 50%;
    height: 100vh;
    transition: left 0.4s linear;
    //to hide scrollbar
    overflow-y: hidden;
  }
  @media screen and (max-width: 425px) {
    left: ${({ showNav }) => (showNav ? '0' : '-80%')};
    width: 80%;
  }
`;

export const NavLink = styled(Link)`
  ${StyleNavElement}
`;

export const MenuLinksBackground = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: inline;
    width: 50%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    left: 50%;
    opacity: ${({ showNav }) => (showNav ? '1' : '0')};
    position: fixed;
    transition: opacity 0.3s linear;
  }
  @media screen and (max-width: 425px) {
    width: 20%;
    left: 80%;
  }
`;

export const SelectLangDiv = styled.div`
  display: flex;
  align-items: center;

  div {
    ${StyleNavElement}
    position: relative;
    background-color: unset;
    &:hover {
      background-color: unset;
    }
    @media screen and (max-width: 768px) {
      width: 100%;
    }

    p {
      color: white;
      display: inline;
      width: 40px;
      padding: 5px;
      font-weight: 700;
      font-size: 14px;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 2px;
      cursor: pointer;
      border: 1px solid transparent;
      &:hover {
        border-color: rgb(254, 0, 50);
      }
      @media screen and (max-width: 768px) {
        background-color: rgba(256, 256, 256, 0.2);
      }
    }
  }
`;

export const UlLanguages = styled.ul`
  position: absolute;
  top: calc(100% + 1px);
  left: 0;
  width: 100%;
  border-radius: 2px;
  padding: 5px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: white;
  display: ${({ showDropDown }) => (showDropDown ? 'block' : 'none')};
  list-style: none;
  li {
    text-align: center;
    font-size: 14px;
    padding: 5px;
    cursor: pointer;

    &:hover {
      font-weight: bold;
    }
  }
`;
