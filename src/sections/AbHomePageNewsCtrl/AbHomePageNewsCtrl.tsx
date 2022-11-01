import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Image from 'mui-image';
import { SwiperSlide } from 'swiper/react';

import AbInfoHeader from '@/components/AbInfoHeader';
import AbNewsSwiper from '@/components/AbNewsSwiper';
import { CenteredFlexBox } from '@/components/styled';
import { getNews } from '@/services/supabase/news';
import { useNewsStories } from '@/store/news';

const AbHomePageNewsCtrl = () => {
  const { newsStories, setNewsStories } = useNewsStories();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    if (newsStories.length === 0) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      getNews().then((res: any) => {
        setNewsStories(res);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box height={'100%'}>
      <CenteredFlexBox height={'20%'}>
        <AbInfoHeader
          title={t('infoHeader.home.news.title')}
          description={t('infoHeader.home.news.description')}
          variant="front"
        />
      </CenteredFlexBox>
      <CenteredFlexBox height={'70%'} width={'100%'} sx={{ overflowX: 'hidden' }}>
        <CenteredFlexBox
          id="oterNEwSwiperBox"
          maxWidth={920}
          sx={{ width: '100%', height: '100%', overflowX: 'hidden' }}
        >
          <AbNewsSwiper>
            {newsStories.map((nS, i) => (
              <SwiperSlide key={i}>
                <Card sx={{ boxShadow: 3, width: 280, height: '100%' }}>
                  <CardActionArea onClick={() => navigate(`/dev/news/${nS.id}`)}>
                    <Box p={1}>
                      <Image
                        duration={1000}
                        height={162}
                        easing="ease-out"
                        // alt={`${nS.title + i}`}
                        alt={`${i}`}
                        src={nS.images ? nS.images[0].url : ''}
                        bgColor="#fff"
                        showLoading
                      />
                    </Box>
                    <CardContent>
                      <Box height={90}>
                        <Typography variant="body2">{nS.date}</Typography>
                        <Typography gutterBottom variant="h5">
                          {i18n.language === 'en' ? nS.title_en : nS.title_ga}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" align="center">
                          {i18n.language === 'en' ? nS.blurb_en : nS.blurb_ga}
                        </Typography>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </SwiperSlide>
            ))}
          </AbNewsSwiper>
        </CenteredFlexBox>
      </CenteredFlexBox>
      <CenteredFlexBox height={'10%'}>
        <Box component={Link} to={'/dev/news'}>
          <Typography variant="body1" m={2} align="center">
            {t('pages.home.seeAll')}
          </Typography>
        </Box>
      </CenteredFlexBox>
    </Box>
  );
};

export default AbHomePageNewsCtrl;
