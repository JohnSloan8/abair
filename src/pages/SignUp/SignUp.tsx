import { useState } from 'react';

import { Box } from '@mui/system';

import AbInfoHeader from '@/components/AbInfoHeader';
import Meta from '@/components/Meta';
import { CenteredFlexBox } from '@/components/styled';
import { supabase } from '@/services/supabase';

// import '../index.css';

function SignUp() {
  const [loading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { user, session, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    error ? console.log(error) : console.log(user);
    console.log('user:', user);
    console.log('session:', session);
  };

  return (
    <CenteredFlexBox>
      <Box sx={{ maxWidth: 'sm', width: '100%' }}>
        <Meta title="sign up" />
        <AbInfoHeader title="Sign Up" />
        <CenteredFlexBox m={2}>
          <div className="col-6 form-widget" aria-live="polite">
            {loading ? (
              'Signing In...'
            ) : (
              <form onSubmit={handleSignUp}>
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
                  sign up
                </button>
              </form>
            )}
          </div>
        </CenteredFlexBox>
      </Box>
    </CenteredFlexBox>
  );
}

export default SignUp;
