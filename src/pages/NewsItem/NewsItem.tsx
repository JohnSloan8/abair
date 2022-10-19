import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Image from 'mui-image';

import AbInfoHeader from '@/components/AbInfoHeader';
import Meta from '@/components/Meta';
import { CenteredFlexBox, FullSizeBox } from '@/components/styled';
import { AbNewsStoryModel } from '@/models/news';
import { ImageDataModel } from '@/models/news';
import { getNews } from '@/services/supabase/news';
import { useNewsStories } from '@/store/news';

function NewsItem() {
  const { t, i18n } = useTranslation();

  const { newsStories, setNewsStories } = useNewsStories();
  const [newsStory, setNewsStory] = useState<AbNewsStoryModel>();
  const params = useParams();

  useEffect(() => {
    if (
      newsStories.length === 0 ||
      newsStories.filter((nS) => nS.id.toString() === params.newsID).length === 0
    ) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      getNews().then((res: any) => {
        setNewsStories(res);
      });
    } else {
      setNewsStory(newsStories.filter((nS) => nS.id.toString() === params.newsID)[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newsStories]);

  return (
    <FullSizeBox>
      <Meta title={t('pageTitles.news')} />
      <CenteredFlexBox>
        {newsStory !== undefined ? (
          <Box sx={{ maxWidth: 'md', width: '100%' }}>
            <AbInfoHeader
              title={i18n.language === 'en' ? newsStory.title_en : newsStory.title_ga}
              variant="front"
            />

            <CenteredFlexBox>
              <Box maxWidth="md" mt={{ xs: 1, sm: 2 }}>
                <Typography align="center">
                  {newsStory.images.map(
                    (image: ImageDataModel, i: number) =>
                      image !== null && (
                        <Image
                          key={i}
                          duration={1000}
                          height={200}
                          easing="ease-out"
                          alt={`news item image`}
                          src={image.url}
                          bgColor="#fff"
                          showLoading
                        />
                      ),
                  )}
                </Typography>
                <Typography gutterBottom variant="body1" m={2} align="left">
                  {i18n.language === 'en' ? newsStory.body_en : newsStory.body_ga}
                </Typography>
              </Box>
            </CenteredFlexBox>
          </Box>
        ) : null}
      </CenteredFlexBox>
    </FullSizeBox>
  );
}

export default NewsItem;
