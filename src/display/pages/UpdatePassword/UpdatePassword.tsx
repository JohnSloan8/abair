/* eslint-disable react-hooks/exhaustive-deps */
import { FormEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

import { AbInfoHeader } from 'abair-components';

import { basePath } from '@/config';
import Meta from '@/display/sections/Meta';
import { CenteredFlexBox, HorizontallyCenteredFlexBox } from '@/display/utils/flex';
import { validatePassword } from '@/display/utils/validators';
import supabase from '@/services/supabase';

function UpdatePassword() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordOK, setNewPasswordOK] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const _newPasswordOK = validatePassword(newPassword);

    if (_newPasswordOK) {
      setNewPasswordOK(true);
    } else {
      setNewPasswordOK(false);
    }
  }, [newPassword]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    const { data, error } = await supabase.auth.updateUser({
      password: newPassword,
    });
    console.log('data:', data);
    console.log('error:', error);
    setLoading(false);
    navigate(`${basePath}`);
  };

  return (
    <HorizontallyCenteredFlexBox>
      <Box sx={{ maxWidth: 'sm', width: '100%' }}>
        <Meta title={t('pageTitles.UpdatePassword')} />

        <Box py={{ sm: 4, xs: 2 }}>
          <AbInfoHeader title={t('pages.auth.UpdatePassword')} />
        </Box>

        <CenteredFlexBox m={2}>
          {loading ? (
            'Processing...'
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
                    name="password"
                    label={t('pages.auth.password')}
                    type="password"
                    id={`newPassword`}
                    autoComplete="new-password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    helperText={
                      !newPasswordOK && newPassword !== ''
                        ? 'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character'
                        : ''
                    }
                  />
                </Grid>
              </Grid>

              <CenteredFlexBox sx={{ width: '100%', position: 'relative' }} my={2}>
                <Button type="submit" variant="contained">
                  {t('pages.auth.updatePassword')}
                </Button>
              </CenteredFlexBox>
            </Box>
          )}
        </CenteredFlexBox>
      </Box>
    </HorizontallyCenteredFlexBox>
  );
}

export default UpdatePassword;
