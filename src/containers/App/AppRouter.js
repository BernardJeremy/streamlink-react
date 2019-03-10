import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TwitchLinkInput from '../TwitchLinkInput/TwitchLinkInput';

const AppRouter = () => (
  <Switch>
    <Route path="*" exact component={TwitchLinkInput} />
  </Switch>
);

export default AppRouter;