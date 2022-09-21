/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

import { Session } from '@supabase/supabase-js';

// import { Session } from '@supabase/supabase-js';
import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import Pages from '@/routes/Pages';
// import Footer from '@/sections/Footer';
import Header from '@/sections/Header';
import Sidebar from '@/sections/Sidebar';
import { supabase } from '@/services/supabase';

import { useSession, useSessionStart } from './store/auth';

function App() {
  const { setSession } = useSession();
  const { sessionStart, setSessionStart } = useSessionStart();

  useEffect(() => {
    console.log('sessionStart:', sessionStart);
  }, [sessionStart]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      storeSessionStart(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      storeSessionStart(session);
    });
  }, []);

  const storeSessionStart = (s: Session | null) => {
    // set session start time for saving requests in database
    if (s === null) {
      setSessionStart(new Date(Date.now()).toISOString());
    } else {
      if (s.user.last_sign_in_at) {
        setSessionStart(new Date(s.user.last_sign_in_at).toISOString());
      } else {
        setSessionStart(new Date(Date.now()).toISOString());
      }
    }
  };

  return (
    <Fragment>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Pages />
        {/* <Footer /> */}
      </BrowserRouter>
    </Fragment>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
