/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { CenteredFlexBox } from '@/display/utils/flex';

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
              />
            </Grid>
          </Grid>
        </Box>
      </CenteredFlexBox>
    </Box>
  );
};

export default ParentConsentForm;
