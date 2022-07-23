import './App.css';
import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Home';
import Main from './Main';

function App() {
  return (
    <Router>

      <Route exact path="/" component={Home} />
      <Route path="/breaking-bad" component={Main} />

  </Router>
  );
}

export default App;


