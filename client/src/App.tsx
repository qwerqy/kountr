import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './pages';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact={true} component={Index} />
      </div>
    </Router>
  );
};

export default App;
