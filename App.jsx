import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/App.css'; 
import ContactList from './components/ContactList';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={ContactList} />
          {/* Add routes for other components/pages as needed */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
