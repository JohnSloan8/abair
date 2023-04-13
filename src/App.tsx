/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

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

function App() {
  const { setSession } = useSession();
  const { /*sessionID,*/ setSessionID } = useSessionID();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setSessionID(uuidv4());
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      console.log('_event:', _event);

      setSession(session);
      setSessionID(uuidv4());
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
