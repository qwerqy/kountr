import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Index from './pages';
import Host from './pages/host';
import Participate from './pages/participate';

import 'semantic-ui-css/semantic.min.css';
import './App.css';
import HostDashboard from './pages/hostDashboard';
import firebase from './firebase';

const App: React.FunctionComponent = (): JSX.Element => {
  const [uid, setUid] = useState('');
  useEffect(() => {
    firebase.auth.signInAnonymously().catch((error: any): void => {
      console.log(error.code, error.message);
    });

    firebase.auth.onAuthStateChanged((user: firebase.User | null) => {
      if (user) {
        setUid(user.uid);
      }
    });
  }, []);

  return (
    <>
      <Route
        path="/"
        exact={true}
        render={(props: any): JSX.Element => <Index {...props} uid={uid} />}
      />
      <Route
        exact={true}
        path="/host"
        render={(props: any): JSX.Element => <Host {...props} uid={uid} />}
      />
      <Route
        path={`/host/:id`}
        render={(props: any): JSX.Element => (
          <HostDashboard {...props} uid={uid} />
        )}
      />
      <Route
        path="/participate"
        render={(props: any): JSX.Element => (
          <Participate {...props} uid={uid} />
        )}
      />
    </>
  );
};

export default App;
