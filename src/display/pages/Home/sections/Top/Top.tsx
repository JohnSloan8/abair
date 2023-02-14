import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { AbInfoHeader } from 'abair-components';

import { CenteredFlexBox } from '@/display/utils/flex';

import Recognition from '../Recognition';
import Synthesis from '../Synthesis';

const Top = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <CenteredFlexBox sx={{ position: 'absolute', width: '100%', height: 60 }}>
        <AbInfoHeader title={t('infoHeader.home.main.title')} />
      </CenteredFlexBox>
      <Grid container height={'100%'}>
        <Grid item sm={0} md={1} lg={2} sx={{ backgroundColor: 'secondary.wafer' }}></Grid>

        <Grid
          item
          sm={12}
          md={4.5}
          lg={3.5}
          width={'100%'}
          pt={{ sm: 6, xs: 4 }}
          sx={{ backgroundColor: 'secondary.wafer' }}
        >
          <CenteredFlexBox>
            <Synthesis />
          </CenteredFlexBox>
        </Grid>
        <Grid
          item
          sm={0}
          md={1}
          sx={{
            background: `linear-gradient(to right, #e3f2fd, #ffebee)`,
          }}
        ></Grid>
        <Grid
          item
          sm={12}
          md={4.5}
          lg={3.5}
          pt={{ sm: 6, xs: 4 }}
          width={'100%'}
          sx={{ backgroundColor: 'warning.wafer' }}
        >
          <CenteredFlexBox>
            <Recognition />
          </CenteredFlexBox>
        </Grid>
        <Grid item sm={0} md={1} lg={2} sx={{ backgroundColor: 'warning.wafer' }}></Grid>
      </Grid>
    </Box>
  );
};

export default Top;
