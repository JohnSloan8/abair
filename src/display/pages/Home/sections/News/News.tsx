import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';

import { AbButton, AbInfoHeader, AbNewsCard } from 'abair-components';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';

import { CenteredFlexBox } from '@/display/utils/flex';
import { getNews } from '@/services/supabase/news';
import { useNewsStories } from '@/store/news';

import './styles.css';

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
        />
      </CenteredFlexBox>
      <CenteredFlexBox height={'70%'} width={'100%'} sx={{ overflowX: 'hidden' }}>
        <CenteredFlexBox
          id="oterNEwSwiperBox"
          maxWidth={920}
          sx={{ width: '100%', height: '100%', overflowX: 'hidden' }}
        >
          <Box width={920}>
            <Swiper
              slidesPerView={3}
              loop={true}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {newsStories.map((nS, i) => (
                <SwiperSlide key={i}>
                  <AbNewsCard
                    title={i18n.language === 'en' ? nS.title_en : nS.title_ga}
                    blurb={i18n.language === 'en' ? nS.blurb_en : nS.blurb_ga}
                    imageSrc={nS.images.length !== 0 ? nS.images[0].url : ''}
                    date={nS.date}
                    onClick={() => navigate(`/news/${nS.id}`)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </CenteredFlexBox>
      </CenteredFlexBox>
      <CenteredFlexBox height={'10%'}>
        <Box width={200}>
          <AbButton
            label={t('pages.home.seeAll')}
            onClick={() => {
              navigate('/news');
            }}
            selected={true}
            color={'secondary'}
            fullWidth={true}
          />
        </Box>
      </CenteredFlexBox>
    </Box>
  );
};

export default AbHomePageNewsCtrl;
