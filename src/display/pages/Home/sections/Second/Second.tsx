import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { useBreakpointSize } from '@/store/viewDimensions';

import Applications from '../Applications';
import MileGlor from '../MileGlor';
import Neartu from '../Neartu';

const Secondary = () => {
  const { breakpointSize } = useBreakpointSize();

  return (
    <Box
      py={2}
      mt={2}
      height={breakpointSize !== 'lg' ? '200vh' : '66.7vh'}
      sx={{ position: 'relative' }}
    >
      <Grid container height={'100%'} width={'100%'}>
        <Grid item lg={4} md={12} width={'100%'}>
          <Neartu />
        </Grid>
        <Grid item lg={4} md={12} width={'100%'}>
          <Applications />
        </Grid>
        <Grid item lg={4} md={12} width={'100%'}>
          <MileGlor />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Secondary;
