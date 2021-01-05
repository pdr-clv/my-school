import React from 'react';

import { Card, CardContent, Content } from './card.styles';


const CardComponent = (props) => {
  return (
    <Card>
      <CardContent>
        <Content>
          {props.children}
        </Content>
      </CardContent>  
    </Card>
  );
};

export default CardComponent;
