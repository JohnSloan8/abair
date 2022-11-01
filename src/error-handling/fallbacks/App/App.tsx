import { useTranslation } from 'react-i18next';

import EmailIcon from '@mui/icons-material/Email';
import RestartIcon from '@mui/icons-material/RestartAlt';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { FullSizeCenteredFlexBox } from '@/components/styled';
import { email } from '@/config';
import resetApp from '@/utils/reset-app';

function AppErrorBoundaryFallback() {
  const { t } = useTranslation();
  return (
    <Box height={400}>
      <FullSizeCenteredFlexBox>
        <Paper sx={{ p: 5 }}>
          <Typography variant="h5" component="h3">
            {t('errorMessages.app.crash.title')}
          </Typography>
          <Button
            startIcon={<EmailIcon />}
            variant="outlined"
            target="_blank"
            rel="noreferrer"
            href={`mailto: ${email}`}
            sx={{ my: 3 }}
          >
            {t('errorMessages.app.crash.options.email')}
          </Button>
          <Typography component="h6">or</Typography>
          <Button startIcon={<RestartIcon />} sx={{ mt: 3 }} variant="outlined" onClick={resetApp}>
            {t('errorMessages.app.crash.options.reset')}
          </Button>
        </Paper>
      </FullSizeCenteredFlexBox>
    </Box>
  );
}

export default AppErrorBoundaryFallback;
