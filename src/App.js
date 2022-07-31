import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Home';
import Main from './Main';

import './styles/style.scss';


function App() {
return(
  <div>
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/breaking-bad" component={Main} />
  </Router>
  </div>
)

}

export default App;


