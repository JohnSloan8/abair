import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Image from 'mui-image';
// import { AbClickableCard } from 'abair-component-library';
import { SwiperSlide } from 'swiper/react';

// import AbInfoHeader from '@/components/AbInfoHeader';
import AbNewsSwiper from '@/components/AbNewsSwiper';
import Meta from '@/components/Meta';
import { CenteredFlexBox } from '@/components/styled';
import AbMapCtrl from '@/sections/AbMapCtrl';
import AbRecognitionMediaCtrl from '@/sections/AbRecognitionMediaCtrl';
import AbSynthesisRecognitionCtrl from '@/sections/AbSynthesisRecognitionCtrl';
import AbTabsCtrl from '@/sections/AbTabsCtrl';
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
      {/* <AbInfoHeader title="Irish Speech and Language Technologies" /> */}
      <Box sx={{ backgroundColor: '#fff' }}>
        <CenteredFlexBox pt={{ sm: 4, xs: 2 }}>
          <Box sx={{ minWidth: 300, maxWidth: 450 }}>
            <AbMapCtrl />
          </Box>
        </CenteredFlexBox>

        <CenteredFlexBox>
          <AbTabsCtrl variation="frontpage" />
        </CenteredFlexBox>

        <CenteredFlexBox sx={{ backgroundColor: 'secondary.wafer' }}>
          <Box p={1} pt={3} sx={{ width: 500 }}>
            <AbSynthesisRecognitionCtrl />
          </Box>
        </CenteredFlexBox>

        <AbRecognitionMediaCtrl />
      </Box>
      <Box sx={{ height: 500 }}></Box>
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
