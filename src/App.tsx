import React, {Component} from 'react';

import './App.css';
import {
  CastSpells,
  CastSpellsBasic,
  CastSpellsThrottle,
  CastSpellsDebounce,
} from './examples';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={CastSpells} />
          <Route path="/basic" component={CastSpellsBasic} />
          <Route path="/throttle" component={CastSpellsThrottle} />
          <Route path="/debounce" component={CastSpellsDebounce} />
        </div>
      </Router>
    );
  }
}

export default App;
