import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

import Image from 'mui-image';
// import { AbClickableCard } from 'abair-component-library';
import { SwiperSlide } from 'swiper/react';

import AbAudioPlayer from '@/components/AbAudioPlayer';
import AbMap from '@/components/AbMap';
import AbNewsSwiper from '@/components/AbNewsSwiper';
import Meta from '@/components/Meta';
import { CenteredFlexBox } from '@/components/styled';
import RecognitionRecord from '@/sections/RecognitionRecord';
import SynthesisTextSubmit from '@/sections/SynthesisTextSubmit';
import { getNews } from '@/services/supabase/news';
import { useFrontPageAudio } from '@/store/audio';
import { useNewsStories } from '@/store/news';

function Home() {
  const { newsStories, setNewsStories } = useNewsStories();
  const [mainTab, setMainTab] = useState(1);
  const { frontPageAudio, setFrontPageAudio } = useFrontPageAudio();

  const navigate = useNavigate();
  useEffect(() => {
    newsStories.length === 0 ? getNews(setNewsStories) : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeMainTab = (event: React.SyntheticEvent, newValue: number) => {
    setMainTab(newValue);
  };

  return (
    <>
      <Meta title="home" />
      <CenteredFlexBox pt={{ sm: 4, xs: 2 }} sx={{ border: '1px solid black' }}>
        <Box sx={{ minWidth: 300, maxWidth: 450 }}>
          <AbMap />
        </Box>
      </CenteredFlexBox>
      <CenteredFlexBox sx={{ border: '1px solid red' }}>
        <Tabs
          value={mainTab}
          onChange={handleChangeMainTab}
          aria-label="main tabs"
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab key={0} label={'abair'} />
          <Tab key={1} label={'éist'} />
        </Tabs>
      </CenteredFlexBox>

      <CenteredFlexBox
        sx={{ height: 240, border: '2px dashed green', backgroundColor: 'secondary.wafer' }}
      >
        <Box p={1} sx={{ border: '1px solid blue', width: 500 }}>
          {mainTab === 0 && <SynthesisTextSubmit />}

          {mainTab === 1 && <RecognitionRecord setter={setFrontPageAudio} />}
        </Box>
      </CenteredFlexBox>
      <CenteredFlexBox sx={{ border: '2px solid red' }}>
        <Box>
          <AbAudioPlayer audioURL={frontPageAudio} />
        </Box>
      </CenteredFlexBox>
      <CenteredFlexBox>
        <Box mt={{ xs: 2, sm: 4 }} maxWidth="md">
          <Typography gutterBottom variant="h5" m={2} align="center">
            Applications
          </Typography>
          <CenteredFlexBox>
            <Link to="/applications">
              <Image
                duration={1000}
                width={600}
                easing="ease-out"
                alt="Abair Applications"
                src="/assets/images/misc/abair-applications.png"
                bgColor="#fff"
                showLoading
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
                <Card>
                  <CardActionArea onClick={() => navigate(`/news/${nS.id}`)}>
                    <Image
                      duration={1000}
                      height={200}
                      easing="ease-out"
                      alt={`${nS.title + i}`}
                      src={nS.images ? nS.images[0].url : ''}
                      bgColor="#fff"
                      showLoading
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
