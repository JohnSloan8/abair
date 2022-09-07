/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';

// import { Session } from '@supabase/supabase-js';
import { withErrorHandler } from '@/error-handling';
import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import Pages from '@/routes/Pages';
// import Footer from '@/sections/Footer';
import Header from '@/sections/Header';
import Sidebar from '@/sections/Sidebar';
import { supabase } from '@/services/supabase';

import { useSession } from './store/auth';

function App() {
  const { setSession } = useSession();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

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
