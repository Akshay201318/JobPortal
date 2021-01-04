import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import CandidateProfile from './CandidateProfile';
import '../App.css';

const App =() => {
  return (
    <div className="App">
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/CandidateProfile' component={CandidateProfile}/>
      </Switch>
    </div>
  );
}

export default App;
