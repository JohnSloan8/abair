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
    if (emailOK && passwordOK && confirmPasswordOK) {
      setEmailPasswordOK(true);
    } else {
      setEmailPasswordOK(false);
    }
  }, [emailOK, passwordOK, confirmPasswordOK]);

  useEffect(() => {
    console.log('emailPaaswordOK:', emailPasswordOK);
  }, [emailPasswordOK]);

  const emailRe =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const validateEmail = (email: string) => {
    if (String(email).toLowerCase().match(emailRe) !== null) {
      return true;
    }
    return false;
  };

  const passwordRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const validatePassword = (password: string) => {
    if (String(password).match(passwordRe) !== null) {
      return true;
    }
    return false;
  };

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
        <Box maxWidth="sm">
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
                helperText={
                  !passwordOK && password !== ''
                    ? 'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character'
                    : ''
                }
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
                  !confirmPasswordOK && confirmPassword !== '' ? "Passwords don't match" : ''
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
