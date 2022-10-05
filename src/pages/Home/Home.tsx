import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Image from 'mui-image';
import { SwiperSlide } from 'swiper/react';

import AbInfoHeader from '@/components/AbInfoHeader';
import AbNewsSwiper from '@/components/AbNewsSwiper';
import Meta from '@/components/Meta';
import { CenteredFlexBox } from '@/components/styled';
import AbHomePageCoreTechnologiesCtrl from '@/sections/AbHomePageCoreTechnologiesCtrl';
import AbHomePageSection1Ctrl from '@/sections/AbHomePageSection1Ctrl';
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

      <AbHomePageSection1Ctrl />

      <CenteredFlexBox py={6}>
        <AbHomePageCoreTechnologiesCtrl />
      </CenteredFlexBox>
      <CenteredFlexBox py={6} sx={{ backgroundColor: 'primary.wafer' }}>
        <Box maxWidth="md">
          <AbInfoHeader
            title="Applications"
            description="Access a wide range of applications developed using our core technologies for public, education, and accessibility."
          />
          <CenteredFlexBox py={4}>
            <Link to="/applications">
              <Image
                duration={1000}
                width={500}
                easing="ease-out"
                alt="Abair Applications"
                src="/assets/images/misc/abair-applications.png"
                showLoading
              />
            </Link>
          </CenteredFlexBox>
        </Box>
      </CenteredFlexBox>

      <CenteredFlexBox py={6}>
        <Box maxWidth="md">
          <AbInfoHeader
            title="Latest News"
            description="Check out what's been going on recently in the world of Abair."
          />
          <Box component={Link} to={'/news'}>
            <Typography variant="body1" m={2} align="center">
              See all
            </Typography>
          </Box>
          <Box py={4} maxWidth="md">
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
          </Box>
        </Box>
      </CenteredFlexBox>

      <CenteredFlexBox sx={{ backgroundColor: 'primary.wafer' }}>
        <Box mt={{ xs: 2, sm: 6 }} mb={24} maxWidth="md">
          <AbInfoHeader
            title="Knowledge Base"
            description="Learn about the linguistic research being carried out which informs the technological development"
          />
        </Box>
      </CenteredFlexBox>
    </>
  );
}

export default Home;
