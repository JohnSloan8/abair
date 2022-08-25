import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// import AbClickableCard from '@/components/AbClickableCard';
import { AbClickableCard } from 'abair-component-library';

import AbInfoHeader from '@/components/AbInfoHeader';
import Meta from '@/components/Meta';

// import { FullSizeCenteredFlexBox } from '@/components/styled';

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Meta title="home" />
      <AbInfoHeader
        title="Speech and Language Technology for Irish"
        description="Abair hosts a wide range of state-of-the-art speech and language technologies for use in"
      />
      <Box maxWidth="md" mt={{ xs: 2, sm: 4 }}>
        <Typography gutterBottom variant="h5" m={2} align="center">
          Core Technologies
        </Typography>
        <Grid
          container
          direction="row"
          px={1}
          spacing={1}
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
      <Box maxWidth="md" mt={{ xs: 2, sm: 4 }}>
        <Typography gutterBottom variant="h5" m={2} align="center">
          Applications
        </Typography>
      </Box>
      <Box maxWidth="md" mt={{ xs: 2, sm: 4 }}>
        <Typography gutterBottom variant="h5" m={2} align="center">
          Knowledge Base
        </Typography>
      </Box>
      <Box maxWidth="md" mt={{ xs: 2, sm: 4 }}>
        <Typography gutterBottom variant="h5" m={2} align="center">
          Latest News
        </Typography>
      </Box>
    </>
  );
}

export default Home;
