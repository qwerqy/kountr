import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from './pages';
import Host from './pages/host';
import Participate from './pages/participate';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact={true} component={Index} />
        <Route path="/host" component={Host} />
        <Route path="/participate" component={Participate} />
      </div>
    </Router>
  );
};

export default App;
