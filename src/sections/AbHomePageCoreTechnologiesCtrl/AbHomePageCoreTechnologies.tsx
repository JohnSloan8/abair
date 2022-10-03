import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import AbClickableCard from '@/components/AbClickableCard';
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
        <Box maxWidth="md" mt={{ xs: 1, sm: 2 }}>
          <Typography gutterBottom variant="h5" m={2} align="center">
            Core Technologies
          </Typography>
          <Grid
            container
            direction="row"
            px={1}
            py={{ sm: 2, xs: 1 }}
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
