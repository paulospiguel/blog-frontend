import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import myProfile from './pages/myProfile'
import inConstruction from './pages/inConstruction';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={inConstruction} />
        <Route path="/my-profile" component={myProfile}/>
      </Switch>
    </BrowserRouter>
  );
}
