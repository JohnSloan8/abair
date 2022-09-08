import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { AbClickableCard } from 'abair-component-library';
import { SwiperSlide } from 'swiper/react';

// import AbClickableCard from '@/components/AbClickableCardOld';
import AbInfoHeader from '@/components/AbInfoHeader';
import AbNewsSwiper from '@/components/AbNewsSwiper';
import Meta from '@/components/Meta';
import { CenteredFlexBox } from '@/components/styled';
import { getNews } from '@/services/supabase/news';
import { useNewsStories } from '@/store/news';

function Home() {
  const { newsStories, setNewsStories } = useNewsStories();

  const navigate = useNavigate();
  useEffect(() => {
    newsStories.length === 0 ? getNews(setNewsStories) : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Meta title="home" />
      <Box>
        <AbInfoHeader
          title="Speech and Language Technology for Irish"
          description="Abair hosts a wide range of state-of-the-art speech and language technologies for use in"
        />

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

      <CenteredFlexBox>
        <Box mt={{ xs: 2, sm: 4 }} maxWidth="md">
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

      <CenteredFlexBox>
        <Box mt={{ xs: 2, sm: 6 }} maxWidth="md">
          <Typography gutterBottom variant="h5" m={2} align="center">
            Latest News
          </Typography>

          <AbNewsSwiper>
            {newsStories.map((nS, i) => (
              <SwiperSlide key={i}>
                {/* <Box
                  component="img"
                  sx={{ minHeight: 200, maxHeight: 200, minWidth: 300, maxWidth: 300 }}
                  src={nS.images[0].url}
                  alt="news image"
                /> */}
                <Card>
                  <CardActionArea onClick={() => navigate(`/news/${nS.id}`)}>
                    <CardMedia
                      component="img"
                      sx={{ minHeight: 200, maxHeight: 200 }}
                      src={nS.images ? nS.images[0].url : null}
                      alt="news image"
                    />
                    <CardContent>
                      <Typography variant="body2">{nS.date}</Typography>
                      <Typography gutterBottom variant="h5">
                        {nS.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" align="left">
                        {nS.blurb}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </SwiperSlide>
            ))}
          </AbNewsSwiper>
          <Box component={Link} to={'/news'}>
            <Typography variant="body1" m={2} align="center">
              See all
            </Typography>
          </Box>
        </Box>
      </CenteredFlexBox>

      <CenteredFlexBox>
        <Box mt={{ xs: 2, sm: 6 }} mb={24} maxWidth="md">
          <Typography gutterBottom variant="h5" m={2} align="center">
            Knowledge Base
          </Typography>
        </Box>
      </CenteredFlexBox>
    </>
  );
}

export default Home;
