import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import AppList from '@/components/AppList';
import InfoClickableCard from '@/components/InfoClickableCard';
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
        <Grid container direction="row" spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6}>
            <InfoClickableCard
              image="https://vivoka.com/app/uploads/2021/02/TTSArticleBanner.jpg"
              title="Speech Synthesis"
              description="Listen to our voices in the 3 main Irish dialects"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InfoClickableCard
              image="https://19yw4b240vb03ws8qm25h366-wpengine.netdna-ssl.com/wp-content/uploads/5-Best-Speech-to-Text-APIs-in-2021-1024x576.png"
              title="Speech Recognition"
              description="Speak in Irish and see your words as text"
            />
          </Grid>
        </Grid>
      </Box>
      <Box maxWidth="md">
        <Typography gutterBottom variant="h5" mt={4} mb={2} align="center">
          Applications
        </Typography>
        <AppList />
      </Box>
      <Box maxWidth="md" p={2}>
        <Typography gutterBottom variant="h5" mb={2} align="center">
          Knowledge Base
        </Typography>
      </Box>
      <Box maxWidth="md" p={2}>
        <Typography gutterBottom variant="h5" mb={2} align="center">
          Latest News
        </Typography>
      </Box>
      <Box maxWidth="md" p={2}>
        <Typography gutterBottom variant="h5" mb={2} align="center">
          Meet the Team
        </Typography>
      </Box>
    </>
  );
}

export default Home;
