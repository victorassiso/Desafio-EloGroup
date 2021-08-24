import { Switch, Route } from 'react-router-dom';

import {NewUser} from './pages/NewUser/newUser';
import { Leads } from './pages/Leads/leads';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={NewUser} />
      <Route path="/leads" component={Leads} />
    </Switch>
  );
};

export default Routes;
