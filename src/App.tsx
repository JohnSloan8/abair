/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import { Session } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';

import Sizing from '@/display/controllers/Sizing';
import Header from '@/display/sections/Header';
import Sidebar from '@/display/sections/Sidebar';
// import { Session } from '@supabase/supabase-js';
import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import Pages from '@/routes/Pages';
import supabase from '@/services/supabase';
import { useSession, useSessionID } from '@/store/auth';
import { useProfile } from '@/store/profile';

import { getProfile } from './services/supabase/profile';

function App() {
  const { setSession } = useSession();
  const { /*sessionID,*/ setSessionID } = useSessionID();
  const { setProfile } = useProfile();

  const loadProfile = (session: Session | null) => {
    if (session !== null) {
      getProfile(session).then((p) => {
        if (p !== undefined && p.length !== 0) {
          setProfile(p[0]);
        } else {
          console.log('no profile');
        }
      });
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setSessionID(uuidv4());
      loadProfile(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      console.log('_event:', _event);
      setSession(session);
      setSessionID(uuidv4());
      loadProfile(session);
    });
  }, []);

  return (
    <Fragment>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Pages />
        <Sizing />
      </BrowserRouter>
    </Fragment>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
