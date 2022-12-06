import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { AbInfoHeader } from 'abair-components';
import Image from 'mui-image';

import { ImageDataModel } from '@/models/news';
import { AbNewsStoryModel } from '@/models/news';
import { getNews } from '@/services/supabase/news';
import { useNewsStories } from '@/store/news';
import Meta from '@/utils/Meta';
import { CenteredFlexBox, HorizontallyCenteredFlexBox } from '@/utils/flex';

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

  useEffect(() => {
    console.log('newsStory:', newsStory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newsStory]);

  return (
    <HorizontallyCenteredFlexBox>
      <Box sx={{ maxWidth: 'md', width: '100%' }} mb={8}>
        <Meta title={t('pageTitles.news')} />

        {newsStory !== undefined ? (
          <Box>
            <Box py={{ sm: 4, xs: 2 }}>
              <AbInfoHeader
                title={i18n.language === 'en' ? newsStory.title_en : newsStory.title_ga}
              />
            </Box>
            <CenteredFlexBox>
              <div dangerouslySetInnerHTML={{ __html: newsStory.video }} />
            </CenteredFlexBox>
            <CenteredFlexBox>
              <Box maxWidth="md" mt={{ xs: 1, sm: 2 }}>
                <CenteredFlexBox>
                  {newsStory.images.map(
                    (image: ImageDataModel, i: number) =>
                      image !== null && (
                        <Image
                          key={i}
                          duration={1000}
                          height={220}
                          width={220}
                          easing="ease-out"
                          alt={`news item image`}
                          src={image.url}
                          bgColor="#fff"
                          showLoading
                        />
                      ),
                  )}
                </CenteredFlexBox>
                <Typography gutterBottom variant="body1" m={2} align="center">
                  {i18n.language === 'en' ? newsStory.blurb_en : newsStory.blurb_ga}
                </Typography>
                <Typography gutterBottom variant="body2" m={2} align="left">
                  {i18n.language === 'en' ? newsStory.body_en : newsStory.body_ga}
                </Typography>
              </Box>
            </CenteredFlexBox>
          </Box>
        ) : null}
      </Box>
    </HorizontallyCenteredFlexBox>
  );
}

export default NewsItem;
