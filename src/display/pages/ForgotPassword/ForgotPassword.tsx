/* eslint-disable react-hooks/exhaustive-deps */
import { FormEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// import { useNavigate, useSearchParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

import { AbInfoHeader } from 'abair-components';

import { domain } from '@/config';
import Meta from '@/display/sections/Meta';
import { CenteredFlexBox, HorizontallyCenteredFlexBox } from '@/display/utils/flex';
import { validateEmail } from '@/display/utils/validators';
import supabase from '@/services/supabase';

function ForgotPassword() {
  const { t } = useTranslation();
  const [showSentPasswordLink, setShowSentPasswordLink] = useState(false);
  const [emailOK, setEmailOK] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const _emailOK = validateEmail(email);

    if (_emailOK) {
      setEmailOK(true);
    } else {
      setEmailOK(false);
    }
  }, [email]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setShowSentPasswordLink(true);
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${domain}update-password`,
    });
    console.log('data:', data);
    console.log('error:', error);
  };

  return (
    <HorizontallyCenteredFlexBox>
      <Box sx={{ maxWidth: 'sm', width: '100%' }}>
        <Meta title={t('pageTitles.forgotPassword')} />

        <Box py={{ sm: 4, xs: 2 }}>
          <AbInfoHeader title={t('pages.auth.forgotPassword')} />
        </Box>

        <CenteredFlexBox m={2}>
          {showSentPasswordLink ? (
            t('pages.auth.passwordUpdating')
          ) : (
            <Box
              component="form"
              noValidate
              onSubmit={(e: FormEvent<HTMLFormElement>) => {
                handleSubmit(e);
              }}
              sx={{ mt: 3 }}
              width={360}
            >
              <Grid container spacing={0}>
                <Grid item xs={12} my={1}>
                  <TextField
                    required
                    fullWidth
                    id={`email`}
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
              </Grid>
              <CenteredFlexBox sx={{ width: '100%', position: 'relative' }} my={2}>
                <Button type="submit" variant="contained">
                  {t('pages.auth.sendEmail')}
                </Button>
              </CenteredFlexBox>
            </Box>
          )}
        </CenteredFlexBox>
      </Box>
    </HorizontallyCenteredFlexBox>
  );
}

export default ForgotPassword;
