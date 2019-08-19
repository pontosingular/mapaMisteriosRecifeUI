import React from "react";
import { Route, Switch, BrowserRouter, Redirect} from  'react-router-dom';
import firebaseHelper from '../util/firebaseHelper'
import AuthHelper from '../util/auth'
import DiscoverPage from './Discover'
import Sign from './sign'

firebaseHelper.signin('aaronpedro16@gmail.com', '123456789')
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={ props =>
        AuthHelper.isAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/signin', state: { from: props.location } }}
          />
        )
      }
    />
  )


export default function AppLayout() {
  return (
    <BrowserRouter>
        <Switch>
          <PrivateRoute path="/" exact component={DiscoverPage} />
          <Route 
            path='/signin'
            exact
            component={Sign}
            />
          <Route
            render={() => (
              <div>
                <h3>Page Not Found</h3>
              </div>
            )}
          />
        </Switch>
    </BrowserRouter>
  )
}