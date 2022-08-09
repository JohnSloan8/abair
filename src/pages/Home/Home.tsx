import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ClickableCard from '@/components/ClickableCard';
import InfoHeader from '@/components/InfoHeader';
import Meta from '@/components/Meta';

// import { FullSizeCenteredFlexBox } from '@/components/styled';

function Home() {
  return (
    <>
      <Meta title="home" />
      <InfoHeader
        title="Speech and Language Technology for Irish"
        description="Abair hosts a wide range of state-of-the-art speech and language technologies for use in"
      />
      <Box maxWidth="md">
        <Typography gutterBottom variant="h5" mb={2} align="center">
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
            <ClickableCard
              path="/speech-synthesis"
              title="Speech Synthesis"
              description="Listen to our voices in the 3 main Irish dialects"
              variation="core"
            />
          </Grid>
          <Grid item>
            <ClickableCard
              path="/speech-recognition"
              title="Speech Recognition"
              description="Speak in Irish and see your words as text"
              variation="core"
            />
          </Grid>
        </Grid>
      </Box>
      <Box maxWidth="md" mt={4}>
        <Typography gutterBottom variant="h5" mb={2} align="center">
          Applications
        </Typography>
        <Grid
          container
          direction="row"
          spacing={1}
          px={1}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <ClickableCard
              path="/applications"
              title="An Scéalaí"
              description="Computer Assisted Language Learning platform"
              variation="app"
            />
          </Grid>
          <Grid item>
            <ClickableCard
              path="/applications"
              title="Leon don Lón"
              description="Pronunciation exercises"
              variation="app"
            />
          </Grid>
          <Grid item>
            <ClickableCard
              path="/applications"
              title="AAC"
              description="Augmentative and Alternative Communication"
              variation="app"
            />
          </Grid>
          <Grid item>
            <ClickableCard
              path="/applications"
              title="LARA"
              description="Interactive Digital Storybooks"
              variation="app"
            />
          </Grid>
        </Grid>
      </Box>
      <Box maxWidth="md" p={2} mt={4}>
        <Typography gutterBottom variant="h5" mb={2} align="center">
          Knowledge Base
        </Typography>
      </Box>
      <Box maxWidth="md" p={2} mt={4}>
        <Typography gutterBottom variant="h5" mb={2} align="center">
          Latest News
        </Typography>
      </Box>
    </>
  );
}

export default Home;
