/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { CenteredFlexBox } from '@/display/utils/flex';
import { validateEmail, validatePassword } from '@/display/utils/validators';
import { useEmailPasswordOK } from '@/store/auth';

interface SignUpFormProps {
  who: string;
  title: string;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
  emailAlreadyUsedError: boolean;
}

const SignUpForm = ({
  who,
  title,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  emailAlreadyUsedError,
}: SignUpFormProps) => {
  const { t } = useTranslation();
  const [emailOK, setEmailOK] = useState(false);
  const [passwordOK, setPasswordOK] = useState(false);
  const [confirmPasswordOK, setConfirmPasswordOK] = useState(false);
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const confirmPasswordRef = useRef<HTMLInputElement>();

  const { emailPasswordOK, setEmailPasswordOK } = useEmailPasswordOK();

  useEffect(() => {
    console.log('emailAlreadyUsedError', emailAlreadyUsedError);
  }, [emailAlreadyUsedError]);

  useEffect(() => {
    if (emailOK && passwordOK && confirmPasswordOK) {
      setEmailPasswordOK(true);
    } else {
      setEmailPasswordOK(false);
    }
  }, [emailOK, passwordOK, confirmPasswordOK]);

  useEffect(() => {
    console.log('emailPaaswordOK:', emailPasswordOK);
  }, [emailPasswordOK]);

  const validateConfirmPassword = (confirmPassword: string) => {
    if (password === confirmPassword) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    const _emailOK = validateEmail(email);

    if (_emailOK) {
      setEmailOK(true);
    } else {
      setEmailOK(false);
    }
  }, [email]);

  useEffect(() => {
    const _passwordOK = validatePassword(password);
    if (passwordRef.current !== undefined) {
      if (_passwordOK) {
        setPasswordOK(true);
      } else {
        setPasswordOK(false);
      }
    }
  }, [password]);

  useEffect(() => {
    const _confirmPasswordOK = validateConfirmPassword(confirmPassword);
    if (confirmPasswordRef.current !== undefined) {
      if (confirmPasswordRef.current.value !== '' && _confirmPasswordOK) {
        setConfirmPasswordOK(true);
      } else {
        setConfirmPasswordOK(false);
      }
    }
  }, [confirmPassword]);

  return (
    <Box>
      <Typography my={2} variant="h6" align="center">
        {title}
      </Typography>
      <CenteredFlexBox p={2} sx={{ backgroundColor: 'background.paper' }}>
        <Box width={360}>
          <Grid container spacing={0}>
            <Grid item xs={12} my={1}>
              <TextField
                inputRef={emailRef}
                required
                fullWidth
                id={`${who}Email`}
                label={t('pages.auth.emailAddress')}
                name="email"
                autoComplete="email"
                type="email"
                placeholder={t('pages.auth.emailAddress')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                helperText={!emailOK && email !== '' ? 'must be a valid email' : ''}
              />
            </Grid>
            <Typography
              variant="body2"
              width={'100%'}
              align="center"
              color="warning.main"
              sx={{ display: emailAlreadyUsedError ? 'block' : 'none' }}
            >
              email matched an existing ABAIR account
            </Typography>
            <Grid item xs={12} my={1}>
              <TextField
                inputRef={passwordRef}
                required
                fullWidth
                name="password"
                label={t('pages.auth.password')}
                type="password"
                id={`${who}Password`}
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                helperText={!passwordOK && password !== '' ? t('pages.auth.minEight') : ''}
              />
            </Grid>

            <Grid item xs={12} my={1}>
              <TextField
                inputRef={confirmPasswordRef}
                required
                fullWidth
                name="confirm password"
                label={t('pages.auth.confirmPassword')}
                type="password"
                id={`${who}ConfirmPassword`}
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                helperText={
                  !confirmPasswordOK && confirmPassword !== ''
                    ? t('pages.auth.passwordsDontMatch')
                    : ''
                }
              />
            </Grid>
          </Grid>
        </Box>
      </CenteredFlexBox>
    </Box>
  );
};

export default SignUpForm;
