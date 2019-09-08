import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CategoryPage } from './pages';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/category" component={CategoryPage} />
      </Switch>
    </div>
  );
}

export default App;
