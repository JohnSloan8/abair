import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import AbClickableCard from '@/components/AbClickableCard';
import AbInfoHeader from '@/components/AbInfoHeader';
import { CenteredFlexBox } from '@/components/styled';
import { useBreakpointSize } from '@/store/viewDimensions';

const AbHomePageCoreTechnologiesCtrl = () => {
  const { breakpointSize } = useBreakpointSize();
  const navigate = useNavigate();
  return (
    <Box height={'100%'}>
      <CenteredFlexBox height={'15%'}>
        <AbInfoHeader
          title="Core Technologies"
          description="Get fine-grained control over parameters for our speech synthesis, and view the output for a range of recognition models."
          variant="front"
        />
      </CenteredFlexBox>
      <CenteredFlexBox height={'85%'}>
        <Grid
          container
          direction="row"
          px={1}
          spacing={{ sm: 4, xs: 2 }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <AbClickableCard
              handleClickEvent={() => navigate('/speech-synthesis')}
              title="Speech Synthesis"
              description="Listen to our voices in the 3 main Irish dialects"
              variation={breakpointSize === 'xs' ? 'app' : 'main'}
            />
          </Grid>
          <Grid item>
            <AbClickableCard
              handleClickEvent={() => navigate('/speech-recognition')}
              title="Speech Recognition"
              description="Speak in Irish and see your words as text"
              variation={breakpointSize === 'xs' ? 'app' : 'main'}
            />
          </Grid>
        </Grid>
      </CenteredFlexBox>
    </Box>
  );
};

export default AbHomePageCoreTechnologiesCtrl;
