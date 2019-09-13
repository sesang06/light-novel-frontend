import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CategoryPage, SeriesPage } from './pages';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/category" component={CategoryPage} />
        <Route path="/series" component={SeriesPage} />
      </Switch>
    </div>
  );
}

export default App;
