import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './routes';

import LoaderSpinner from '../../../shared/components/Loader';
import Header from '../../../client/components/Header';
// import PublicPage from '../PublicRoute';
// import PrivatePage from '../PrivateRoute';
const AuthPage = lazy(() => import('../../../pages/AuthPage') /* webpackChunkName: "TestPage" */);
const MainPage = lazy(() => import('../../../pages/MainPage') /* webpackChunkName: "MainPage" */);

function App() {
  const { auth, main } = routes;
  return (
     <Router>
      <Suspense fallback={<LoaderSpinner />}>
        <Header/>
        <Switch>
          {/* <PublicPage exact path={auth} restricted component={AuthPage} redirectTo={main} /> */}
          <Route exact path={auth} component={AuthPage} />
          <Route exact path={main} component={MainPage}/>
          {/* <PrivatePage exact path={main} component={MainPage} redirectTo={auth} /> */}
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
