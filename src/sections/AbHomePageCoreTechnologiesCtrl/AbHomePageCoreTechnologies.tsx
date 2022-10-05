import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import AbClickableCard from '@/components/AbClickableCard';
import AbInfoHeader from '@/components/AbInfoHeader';
import { CenteredFlexBox } from '@/components/styled';

const AbHomePageCoreTechnologiesCtrl = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        backgroundColor: 'background.default',
      }}
    >
      <CenteredFlexBox>
        <Box>
          <AbInfoHeader
            title="Core Technologies"
            description="Get fine-grained control over parameters for our speech synthesis, and view the output for a range of recognition models."
          />
          <Grid
            container
            direction="row"
            px={1}
            py={6}
            spacing={{ sm: 4, xs: 1 }}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <AbClickableCard
                handleClickEvent={() => navigate('/speech-synthesis')}
                title="Speech Synthesis"
                description="Listen to our voices in the 3 main Irish dialects"
                variation="main"
              />
            </Grid>
            <Grid item>
              <AbClickableCard
                handleClickEvent={() => navigate('/speech-recognition')}
                title="Speech Recognition"
                description="Speak in Irish and see your words as text"
                variation="main"
              />
            </Grid>
          </Grid>
        </Box>
      </CenteredFlexBox>
    </Box>
  );
};

export default AbHomePageCoreTechnologiesCtrl;
