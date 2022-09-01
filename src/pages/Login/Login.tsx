/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box } from '@mui/system';

import AbInfoHeader from '@/components/AbInfoHeader';
import Meta from '@/components/Meta';
import { CenteredFlexBox } from '@/components/styled';
import { supabase } from '@/services/supabase';
import { useSession } from '@/store/auth';

function Login() {
  const { setSession } = useSession();
  const [loading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const handleLogin = (e) => {
    console.log('in handle login');
    e.preventDefault();
    console.log('email:', email);
    console.log('password:', password);
    const { user, error } = supabase.auth.signInWithPassword({ email, password });
    console.log('user:', user);
    console.log('error:', error);
    navigate('/', { replace: true });
  };

  return (
    <CenteredFlexBox>
      <Box sx={{ maxWidth: 'sm', width: '100%' }}>
        <Meta title="log in" />
        <AbInfoHeader title="Log In" />
        <CenteredFlexBox m={2}>
          <div className="col-6 form-widget" aria-live="polite">
            <p className="description">Sign in via email and password</p>
            {loading ? (
              'Logging In...'
            ) : (
              <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  className="inputField"
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  className="inputField"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button className="button block" aria-live="polite">
                  login
                </button>
              </form>
            )}
          </div>
        </CenteredFlexBox>
      </Box>
    </CenteredFlexBox>
  );
}

export default Login;
