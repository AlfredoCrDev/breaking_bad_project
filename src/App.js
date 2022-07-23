import './App.css';
import React, {useEffect} from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Home';
import Main from './Main';
import Axios from "axios"; 



function App() {

  useEffect(() => {
    fetch(); 
    }); 
    
    const fetch = async() => {
        try {
            const response = await Axios.get('https://www.breakingbadapi.com/api/characters');
            console.log(response);
          } catch (error) {
            console.error(error);
          }
    }
  return (
    <Router>

      <Route exact path="/" component={Home} />
      <Route path="/breaking-bad" component={Main} />

  </Router>
  );
}

export default App;


