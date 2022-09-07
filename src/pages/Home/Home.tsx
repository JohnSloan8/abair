import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// import AbClickableCard from '@/components/AbClickableCard';
import { AbButton } from 'abair-component-library';
import { AbClickableCard } from 'abair-component-library';
import { SwiperSlide } from 'swiper/react';

import AbInfoHeader from '@/components/AbInfoHeader';
import AbMap from '@/components/AbMap';
import AbNewsSwiper from '@/components/AbNewsSwiper';
import AbTextField from '@/components/AbTextField';
import Meta from '@/components/Meta';
import { CenteredFlexBox } from '@/components/styled';
import { getNews } from '@/services/news';
import getSynthesisMetadata from '@/services/synthesis/metadata';
import { useNewsStories } from '@/store/news';
import { isSynthesisTextEmptyString, useSynthesisAudio, useSynthesisText } from '@/store/synthesis';
import {
  filteredSynthesisVoiceOptionsState,
  synthesisVoiceModel,
  synthesisVoiceSelectedState,
  useSynthesisVoiceIndex,
  useSynthesisVoiceOptions,
} from '@/store/synthesis/voiceOptions';

import getSynthesis from '../../services/synthesis';

function Home() {
  const { synthesisText } = useSynthesisText();
  const { setSynthesisAudio } = useSynthesisAudio();
  const synthesisVoiceSelected = useRecoilValue(synthesisVoiceSelectedState);
  const { synthesisVoiceOptions, setSynthesisVoiceOptions } = useSynthesisVoiceOptions();

  const filteredSynthesisVoiceOptions = useRecoilValue(filteredSynthesisVoiceOptionsState);
  const { newsStories, setNewsStories } = useNewsStories();
  const emptyString = useRecoilValue(isSynthesisTextEmptyString);
  const { synthesisVoiceIndex, setSynthesisVoiceIndex } = useSynthesisVoiceIndex();

  // const navigate = useNavigate();
  useEffect(() => {
    newsStories.length === 0 ? getNews(setNewsStories) : null;
    synthesisVoiceOptions.length === 0 ? getSynthesisMetadata(setSynthesisVoiceOptions) : null;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Meta title="home" />
      <Box sx={{ backgroundColor: 'white' }}>
        <AbInfoHeader
          title="Speech and Language Technology for Irish"
          description="Abair hosts a wide range of state-of-the-art speech and language technologies for use in"
        />

        <CenteredFlexBox>
          <Box my={{ xs: 2, sm: 4 }} maxWidth="md">
            <Typography gutterBottom variant="h5" mb={2} align="center">
              Speech Synthesis
            </Typography>
            <Grid container spacing={0} width="100%">
              <Grid item xs={12} sm={4}>
                <AbMap />
              </Grid>
              <Grid
                container
                item
                xs={12}
                sm={8}
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
                <Stack
                  direction="row"
                  spacing={{ sm: 1, xs: 0.25 }}
                  sx={{ flexWrap: 'wrap' }}
                  justifyContent="center"
                  mb={{ sm: 2, xs: 1 }}
                >
                  {filteredSynthesisVoiceOptions.map((k: synthesisVoiceModel, i: number) => (
                    <AbButton
                      label={k.name}
                      onClick={() =>
                        synthesisVoiceIndex === i
                          ? setSynthesisVoiceIndex(-1)
                          : setSynthesisVoiceIndex(i)
                      }
                      key={i}
                      selected={k === synthesisVoiceSelected ? true : false}
                      variation="voice"
                      color={''}
                    />
                  ))}
                </Stack>
                {/* </CenteredFlexBox> */}
                <Box px={0} component="form" noValidate autoComplete="off" sx={{ width: '90%' }}>
                  <AbTextField variation="synthesis" />
                  <Typography align="center" p={{ sm: 4, xs: 2 }}>
                    <Button
                      disabled={emptyString}
                      variant="contained"
                      color="primary"
                      onClick={() =>
                        getSynthesis(synthesisText, synthesisVoiceSelected, setSynthesisAudio)
                      }
                    >
                      Synthesise
                    </Button>
                  </Typography>
                  {/* {!emptyAudio && (
                    <CenteredFlexBox>
                      <AbAudioPlayer audioURL={synthesisAudio} />
                    </CenteredFlexBox>
                  )} */}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </CenteredFlexBox>
      </Box>

      <CenteredFlexBox sx={{ backgroundColor: 'white' }}>
        <Box my={{ xs: 1, sm: 2 }} maxWidth="md">
          <Typography gutterBottom variant="h5" m={2} align="center">
            Applications
          </Typography>
          <CenteredFlexBox>
            <Link to="/applications">
              <Box
                component="img"
                sx={{
                  maxWidth: { xs: 350, sm: 600 },
                }}
                alt="Abair Applications"
                src="/assets/images/misc/abair-applications.png"
              />
            </Link>
          </CenteredFlexBox>
        </Box>
      </CenteredFlexBox>

      <CenteredFlexBox sx={{ backgroundColor: 'white' }}>
        <Box my={{ xs: 1, sm: 2 }} maxWidth="md">
          <Typography gutterBottom variant="h5" m={2} align="center">
            Knowledge Base
          </Typography>
        </Box>
      </CenteredFlexBox>
      <CenteredFlexBox>
        <Box my={{ xs: 1, sm: 2 }} maxWidth="sm">
          <Typography gutterBottom variant="h5" m={2} align="center">
            Latest News
          </Typography>
          <AbNewsSwiper>
            {newsStories.map((nS, i) => (
              <SwiperSlide key={i}>
                <AbClickableCard
                  path="/news"
                  image={nS.images[0].url}
                  title={nS.title}
                  description={nS.blurb}
                  variation="main"
                />
              </SwiperSlide>
            ))}
          </AbNewsSwiper>
        </Box>
      </CenteredFlexBox>
    </>
  );
}

export default Home;
