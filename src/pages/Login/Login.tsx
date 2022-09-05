/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box } from '@mui/system';

import AbInfoHeader from '@/components/AbInfoHeader';
import Meta from '@/components/Meta';
import { CenteredFlexBox } from '@/components/styled';
import { supabase } from '@/services/supabase';

function Login() {
  const [loading, setLoading] = useState(false);
  const [confirmationEmailSent, setConfirmationEmailSent] = useState(false);
  const [showSignupPage, setShowSignupPage] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const toggleSignupPage = () => {
    setShowSignupPage(!showSignupPage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (showSignupPage) {
      setLoading(true);
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      setLoading(false);
      if (error) {
        console.log(error);
      } else {
        console.log(user);
        setConfirmationEmailSent(true);
        setShowSignupPage(false);
      }
    } else {
      setLoading(true);
      const { user, error } = supabase.auth.signInWithPassword({ email, password });
      error ? console.log(error) : console.log(user);
      setLoading(false);
      navigate('/', { replace: true });
    }
  };

  // const handleSignUp = async (e) => {
  //   e.preventDefault();
  //   const { user, session, error } = await supabase.auth.signUp({
  //     email: email,
  //     password: password,
  //   });

  //   error ? console.log(error) : console.log(user);
  //   console.log('user:', user);
  //   console.log('session:', session);
  // };

  return (
    <CenteredFlexBox>
      <Box sx={{ maxWidth: 'sm', width: '100%' }}>
        <Meta title="log in" />
        {confirmationEmailSent ? (
          <AbInfoHeader
            title="Confirmation Email sent"
            description="Please check your email to confirm your accout. Then you can login to Abair."
          />
        ) : showSignupPage ? (
          <AbInfoHeader title="Sign Up" />
        ) : (
          <AbInfoHeader title="Log In" />
        )}
        <CenteredFlexBox m={2}>
          {loading ? (
            'Processing...'
          ) : confirmationEmailSent ? (
            <></>
          ) : (
            <form onSubmit={handleSubmit}>
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
              {showSignupPage ? (
                <>
                  <label htmlFor="password">Confirm Password</label>
                  <input
                    id="confirmPassword"
                    className="inputField"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <br />
                  <button className="button block" aria-live="polite">
                    sign up
                  </button>
                  <br />
                  <button onClick={toggleSignupPage}>I already have an account</button>
                </>
              ) : (
                <>
                  <button className="button block" aria-live="polite">
                    login
                  </button>
                  <br />
                  <button onClick={toggleSignupPage}>Create an Abair account</button>
                </>
              )}
              <br />
            </form>
          )}
        </CenteredFlexBox>
      </Box>
    </CenteredFlexBox>
  );
}

export default Login;
