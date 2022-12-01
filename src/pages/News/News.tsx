/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';

import { AbNewsStory } from 'abair-components';
import { AbInfoHeader } from 'abair-components';

import { AbNewsStoryModel } from '@/models/news';
import { getNews } from '@/services/supabase/news';
import { useNewsStories } from '@/store/news';
import Meta from '@/utils/Meta';
import { CenteredFlexBox, HorizontallyCenteredFlexBox } from '@/utils/flex';

function News() {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const { newsStories, setNewsStories } = useNewsStories();
  const navigate = useNavigate();
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
          <AbInfoHeader title={t('pageTitles.news')} />
        </Box>
        <CenteredFlexBox>
          <Box sx={{ width: '100%', maxWidth: 'md' }}>
            {loading ? (
              <p>loading...</p>
            ) : (
              newsStories.map((nS: AbNewsStoryModel, i: number) => (
                <AbNewsStory
                  onClick={() => navigate(`/news/${nS.id}`)}
                  key={i}
                  title={i18n.language === 'en' ? nS.title_en : nS.title_ga}
                  date={nS.date}
                  blurb={i18n.language === 'en' ? nS.blurb_en : nS.blurb_ga}
                  body={i18n.language === 'en' ? nS.body_en : nS.body_ga}
                  image={nS.images[0] !== undefined ? nS.images[0].url : ''}
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
