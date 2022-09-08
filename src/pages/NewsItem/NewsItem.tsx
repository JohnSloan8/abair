import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import AbInfoHeader from '@/components/AbInfoHeader';
import Meta from '@/components/Meta';
import { CenteredFlexBox } from '@/components/styled';
import { getNews } from '@/services/supabase/news';
import { useNewsStories } from '@/store/news';

function NewsItem() {
  const { newsStories, setNewsStories } = useNewsStories();
  const [newsStory, setNewsStory] = useState({});
  const params = useParams();
  console.log('params:', params);

  useEffect(() => {
    newsStories.length === 0 ||
    newsStories.filter((nS) => nS.id.toString() === params.newsID).length === 0
      ? getNews(setNewsStories, parseInt(params.newsID))
      : setNewsStory(newsStories.filter((nS) => nS.id.toString() === params.newsID)[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newsStories]);

  useEffect(() => {
    console.log('newsStory:', newsStory);
  }, [newsStory]);
  return (
    <>
      <Meta title="news item" />

      <AbInfoHeader title={newsStory.title} description={newsStory.blurb} />

      <CenteredFlexBox>
        <Box maxWidth="md" mt={{ xs: 1, sm: 2 }}>
          <Typography align="center">
            {newsStory.images
              ? newsStory.images.map((image, i) => (
                  <Box
                    height="200px"
                    key={i}
                    component="img"
                    src={image.url}
                    alt={`${newsStory.title + i}`}
                    loading="lazy"
                  />
                ))
              : null}
          </Typography>
          <Typography gutterBottom variant="body1" m={2} align="left">
            {newsStory.body}
          </Typography>
        </Box>
      </CenteredFlexBox>
    </>
  );
}

export default NewsItem;
