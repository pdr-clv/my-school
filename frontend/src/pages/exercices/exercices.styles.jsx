import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  text-align: center;
`;
export const ExercicesBlock = styled.div`
  width: 70%;
  background: rgba(256, 256, 256, 0.3);
`;

export const UnitBlock = styled.div`
  width: 40%;
  margin: 0 auto;
  h4 {
    background-color: rgb(254, 0, 50);
    color: white;
    padding: 10px 15px;
    cursor: pointer;
    border: solid 1px white;
  }
`;

const lineHeightLinks = 1.7; //we define line Height to get the automated total height of Block, according to the elements in an unit.

export const LinksBlock = styled.div`
  background-color: white;
  line-height: ${lineHeightLinks}em;
  height: ${({ showLinks }) =>
    showLinks && showLinks.show
      ? `${showLinks.elementsNum * lineHeightLinks}em`
      : '0'};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.4s ease;
`;

export const ExercicesLink = styled(Link)`
  color: rgb(254, 0, 50);
`;
