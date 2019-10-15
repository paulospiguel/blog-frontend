import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import myProfile from './pages/myProfile';
import myProjects from './pages/myProjects';
import myCourses from './pages/myCourses';
import inConstruction from './pages/inConstruction';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={inConstruction} />
        <Route path="/my-projects" component={myProjects} />
        <Route path="/my-profile" component={myProfile} />
        <Route path="/my-courses" component={myCourses} />
      </Switch>
    </BrowserRouter>
  );
}
