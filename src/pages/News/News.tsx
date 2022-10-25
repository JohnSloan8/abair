/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';

import AbInfoHeader from '@/components/AbInfoHeader';
import AbNewsStory from '@/components/AbNewsStory';
import Meta from '@/components/Meta';
import { CenteredFlexBox, HorizontallyCenteredFlexBox } from '@/components/styled';
import { AbNewsStoryModel } from '@/models/news';
import { getNews } from '@/services/supabase/news';
import { useNewsStories } from '@/store/news';

function News() {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const { newsStories, setNewsStories } = useNewsStories();
  useEffect(() => {
    if (newsStories.length < 4) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      getNews().then((res: any) => {
        setLoading(false);
        setNewsStories(res);
      });
    }
  }, []);

  return (
    <HorizontallyCenteredFlexBox>
      <Box sx={{ maxWidth: 'md', width: '100%' }}>
        <Meta title={t('pageTitles.news')} />
        <Box py={{ sm: 4, xs: 2 }}>
          <AbInfoHeader title={t('pageTitles.news')} variant="front" />
        </Box>
        <CenteredFlexBox>
          <Box sx={{ width: '100%', maxWidth: 'md' }}>
            {loading ? (
              <p>loading...</p>
            ) : (
              newsStories.map((nS: AbNewsStoryModel, i: number) => (
                <AbNewsStory
                  key={i}
                  id={nS.id}
                  title={i18n.language === 'en' ? nS.title_en : nS.title_ga}
                  date={nS.date}
                  blurb={i18n.language === 'en' ? nS.blurb_en : nS.blurb_ga}
                  body={i18n.language === 'en' ? nS.body_en : nS.body_ga}
                  images={nS.images}
                />
              ))
            )}
          </Box>
        </CenteredFlexBox>
      </Box>
    </HorizontallyCenteredFlexBox>
  );
}

export default News;
