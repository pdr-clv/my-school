import { Route, Switch } from 'react-router-dom';
import React from 'react';

import SaberConocer from '../../components/saber-conocer/saber-conocer.component';
import SerEstar from '../../components/ser-estar/ser-estar.component';
import Quiz from '../../components/quiz/quiz.component';
import { Container, SideBar, ExercicesBlock, ExercicesLink } from './exercices.styles';

const ExercicesPage = () => {
  
  return (
    <Container>  
    <SideBar>
    <ExercicesLink to='/exercices/saberconocer'>Saber o Conocer</ExercicesLink>
    <ExercicesLink to='/exercices/serestar'>Ser o Estar</ExercicesLink>
    <ExercicesLink to='/exercices/quiz'>Quiz</ExercicesLink>
    </SideBar>
    <ExercicesBlock>
      <Switch>
        <Route exact path='/exercices/serestar' component={ SerEstar } />
        <Route exact path='/exercices/saberconocer' component={ SaberConocer } />
        <Route exact path='/exercices/quiz' component={ Quiz } />
      </Switch>
    </ExercicesBlock>
    </Container>
  );
};

export default ExercicesPage;
