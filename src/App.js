import './App.css';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component.jsx';
import HomePage from './pages/home-page/home.page';

const Courses = () => <h1>Here are the Courses</h1>;
const Link2 = () => <h1>Here are the Link2</h1>;
const Link3 = () => <h1>Here are the Link3</h1>;

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/courses' component={ Courses } />
        <Route exact path='/link2' component={ Link2 } />
        <Route exact path='/link3' component={ Link3 } />
      </Switch>
    </div>
  );
};

export default App;
