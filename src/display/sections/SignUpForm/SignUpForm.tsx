/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { CenteredFlexBox } from '@/display/utils/flex';

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
              />
            </Grid>
            <Grid item xs={12} my={1}>
              <TextField
                required
                fullWidth
                name="password"
                label={t('pages.auth.password')}
                type="password"
                id={`${who}Password`}
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} my={1}>
              <TextField
                required
                fullWidth
                name="confirm password"
                label={t('pages.auth.confirmPassword')}
                type="password"
                id={`${who}ConfirmPassword`}
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Grid>
          </Grid>
        </Box>
      </CenteredFlexBox>
    </Box>
  );
};

export default SignUpForm;
