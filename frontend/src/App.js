import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component.jsx';
import HomePage from './pages/home-page/home.page';
import ExercicesPage from './pages/exercices/exercices.page';

import './App.css';

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
    </Switch>
  </div>
);

export default App;
