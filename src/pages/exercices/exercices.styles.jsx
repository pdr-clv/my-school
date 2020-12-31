import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
  display: flex;
`;
export const ExercicesBlock = styled.div`
  width: 70%;
  background:rgba(256,256,256,0.3);
`;

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  background: rgba(0,0,0,0.2);
`;

export const ExercicesLink = styled(Link)`
  
`;