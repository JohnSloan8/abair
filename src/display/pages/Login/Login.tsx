/* eslint-disable react-hooks/exhaustive-deps */
import { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';

import { AbInfoHeader } from 'abair-components';

import Meta from '@/display/sections/Meta';
import { CenteredFlexBox, HorizontallyCenteredFlexBox } from '@/display/utils/flex';
import supabase from '@/services/supabase';

function Login() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [confirmationEmailSent] = useState(false);
  const [showSignupPage, setShowSignupPage] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const toggleSignupPage = () => {
    setShowSignupPage(!showSignupPage);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (showSignupPage) {
      setLoading(true);
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      setLoading(false);
      if (error) {
        console.log(error);
      } else {
        console.log(data.user);
        // setConfirmationEmailSent(true);
        setShowSignupPage(false);
        navigate('/profile', { replace: true });
      }
    } else {
      setLoading(true);
      // const { user, error } = supabase.auth.signInWithPassword({ email, password }).then(() => {
      supabase.auth.signInWithPassword({ email, password }).then(() => {
        setLoading(false);
        navigate('/profile', { replace: true });
      });
    }
  };

  return (
    <HorizontallyCenteredFlexBox>
      <Box sx={{ maxWidth: 'sm', width: '100%' }}>
        <Meta title={t('pageTitles.loginSignup')} />
        {confirmationEmailSent ? (
          <Box py={{ sm: 4, xs: 2 }}>
            <AbInfoHeader
              title="Confirmation Email sent"
              description="Please check your email to confirm your accout. Then you can login to Abair."
            />
          </Box>
        ) : showSignupPage ? (
          <Box py={{ sm: 4, xs: 2 }}>
            <AbInfoHeader title={t('pages.auth.signup')} />
          </Box>
        ) : (
          <Box py={{ sm: 4, xs: 2 }}>
            <AbInfoHeader title={t('pages.auth.login')} />
          </Box>
        )}
        <CenteredFlexBox m={2}>
          {loading ? (
            'Processing...'
          ) : confirmationEmailSent ? (
            <></>
          ) : (
            <Box
              component="form"
              noValidate
              onSubmit={(e: FormEvent<HTMLFormElement>) => {
                handleSubmit(e);
              }}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={0}>
                <Grid item xs={12} my={1}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label={t('pages.auth.emailAddress')}
                    name="email"
                    autoComplete="email"
                    type="email"
                    placeholder={t('pages.auth.emailAddress')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} my={1}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label={t('pages.auth.password')}
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                {showSignupPage ? (
                  <>
                    <Grid item xs={12} my={1}>
                      <TextField
                        required
                        fullWidth
                        name="confirm password"
                        label={t('pages.auth.confirmPassword')}
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </Grid>
                    <CenteredFlexBox sx={{ width: '100%' }}>
                      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                        {t('pages.auth.signup')}
                      </Button>
                    </CenteredFlexBox>

                    <Button sx={{ color: 'secondary.main' }} onClick={toggleSignupPage}>
                      {t('pages.auth.haveAccount')}
                    </Button>
                  </>
                ) : (
                  <>
                    <CenteredFlexBox sx={{ width: '100%' }}>
                      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                        {t('pages.auth.login')}
                      </Button>
                    </CenteredFlexBox>

                    <Button sx={{ color: 'secondary.main' }} onClick={toggleSignupPage}>
                      {t('pages.auth.createAccount')}
                    </Button>
                  </>
                )}
              </Grid>
            </Box>
          )}
        </CenteredFlexBox>
      </Box>
    </HorizontallyCenteredFlexBox>
  );
}

export default Login;
