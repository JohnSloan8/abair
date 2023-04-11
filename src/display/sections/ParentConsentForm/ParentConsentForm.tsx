/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { CenteredFlexBox } from '@/display/utils/flex';
import { useParentEmailNameOK } from '@/store/auth';

interface ParentConsentFormProps {
  parentEmail: string;
  setParentEmail: Dispatch<SetStateAction<string>>;
  parentName: string;
  setParentName: Dispatch<SetStateAction<string>>;
}

const ParentConsentForm = ({
  parentEmail,
  setParentEmail,
  parentName,
  setParentName,
}: ParentConsentFormProps) => {
  const { t } = useTranslation();
  const [parentEmailOK, setParentEmailOK] = useState(false);
  const [parentNameOK, setParentNameOK] = useState(false);
  const { setParentEmailNameOK } = useParentEmailNameOK();

  useEffect(() => {
    if (parentEmailOK && parentNameOK) {
      setParentEmailNameOK(true);
    } else {
      setParentEmailNameOK(false);
    }
  }, [parentEmailOK, parentNameOK]);

  const emailRe =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const validateEmail = (email: string) => {
    if (String(email).toLowerCase().match(emailRe) !== null) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    const _emailOK = validateEmail(parentEmail);
    if (_emailOK) {
      setParentEmailOK(true);
    } else {
      setParentEmailOK(false);
    }
  }, [parentEmail]);

  const validateName = (name: string) => {
    if (name.length > 2) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    const _nameOK = validateName(parentName);
    if (_nameOK) {
      setParentNameOK(true);
    } else {
      setParentNameOK(false);
    }
  }, [parentName]);

  return (
    <Box>
      <Typography my={2} variant="h6" align="center">
        Parent and Caregiver Information
      </Typography>
      <CenteredFlexBox p={2} sx={{ backgroundColor: 'background.paper' }}>
        <Box maxWidth="sm">
          <Grid container spacing={0}>
            <Grid item xs={12} my={1}>
              <TextField
                required
                fullWidth
                id={`parentName`}
                label={t('pages.auth.name')}
                name="parentName"
                type="text"
                placeholder={t('pages.auth.name')}
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                helperText={!parentNameOK && parentName !== '' ? 'must be at least 3 letters' : ''}
              />
            </Grid>
            <Grid item xs={12} my={1}>
              <TextField
                required
                fullWidth
                id={`parentEmail`}
                label={t('pages.auth.emailAddress')}
                name="email"
                autoComplete="email"
                type="email"
                placeholder={t('pages.auth.emailAddress')}
                value={parentEmail}
                onChange={(e) => setParentEmail(e.target.value)}
                helperText={!parentEmailOK && parentEmail !== '' ? 'must be a valid email' : ''}
              />
            </Grid>
          </Grid>
        </Box>
      </CenteredFlexBox>
    </Box>
  );
};

export default ParentConsentForm;
