import styled from 'styled-components';

export const Card = styled.div`
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

export const CardContent = styled.div`
  padding: 15px;
  
`;

export const Content = styled.div`

  &>*{
    padding: 10px;
  }
`;

