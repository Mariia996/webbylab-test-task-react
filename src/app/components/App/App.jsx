import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { routes } from './routes';
import { currentUser } from '../../../redux/auth/auth-operatons';

import LoaderSpinner from '../../../shared/components/Loader';
import Header from '../../../client/components/Header';
import PublicPage from '../PublicRoute';
import PrivatePage from '../PrivateRoute';
const AuthPage = lazy(() => import('../../../pages/AuthPage') /* webpackChunkName: "TestPage" */);
const MainPage = lazy(() => import('../../../pages/MainPage') /* webpackChunkName: "MainPage" */);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser())
  }, [dispatch])
  
  const { auth, main } = routes;
  return (
     <Router>
      <Suspense fallback={<LoaderSpinner />}>
        <Header/>
        <Switch>
          <PublicPage exact path={auth} restricted component={AuthPage} redirectTo={main} />
          <PrivatePage exact path={main} component={MainPage} redirectTo={auth} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
