import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component.jsx';
import HomePage from './pages/home-page/home.page';
import ExercicesPage from './pages/exercices/exercices.page';
import ExerciceQuiz from './components/exercice-quiz/exercice-quiz.component';
import Quiz from './components/quiz/quiz.component';
import SaberConocer from './components/saber-conocer/saber-conocer.component';
import Unit from './components/unit/unit.component';

const Link2 = () => <h1>Here are the Link2</h1>;
const Link3 = () => <h1>Here are the Link3</h1>;

const App = () => (
  <div className='App'>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/exercices' component={ExercicesPage} />
      <Route exact path='/link2' component={Link2} />
      <Route exact path='/link3' component={Link3} />
      <Route exact path='/exercicequiz' component={ExerciceQuiz} />
      <Route exact path='/serestar' component={Quiz} />
      <Route exact path='/saberconocer' component={SaberConocer} />
      <Route path='/unit1' component={Unit} />
    </Switch>
  </div>
);

export default App;
