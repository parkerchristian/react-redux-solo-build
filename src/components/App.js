import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import PostById from '../containers/PostByID';
import Home from './Home';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/posts/:id" component={PostById} />
      </Switch>
    </Router>
  );
}
