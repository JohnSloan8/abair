import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import AbInfoHeader from '@/components/AbInfoHeader';
import Meta from '@/components/Meta';
import { getNewsItem } from '@/services/news';
import { useNewsStories } from '@/store/news';

// type NewsItemModel = {
//   i: string;
// };

function NewsItem() {
  const { newsStories, setNewsStories } = useNewsStories();
  const params = useParams();
  console.log('params:', params);

  useEffect(() => {
    newsStories.length === 0 ||
    newsStories.filter((nS) => nS.id.toString() === params.newsID).length === 0
      ? getNewsItem(setNewsStories, parseInt(params.newsID))
      : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Meta title="news item" />

      {/* <AbInfoHeader title={newsStory.title} description={newsStory.blurb} />

      <Box maxWidth="md" mt={{ xs: 1, sm: 2 }}>
        <Typography gutterBottom variant="body1" m={2} align="left">
          {newsStory.body}
        </Typography>
      </Box> */}
    </>
  );
}

export default NewsItem;
