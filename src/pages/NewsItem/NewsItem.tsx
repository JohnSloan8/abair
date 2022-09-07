import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import AbInfoHeader from '@/components/AbInfoHeader';
import Meta from '@/components/Meta';
import { getNewsItem } from '@/services/news';
import { useNewsStories } from '@/store/news';

type NewsItemModel = {
  id: string;
};

function NewsItem() {
  const { newsStories, setNewsStories } = useNewsStories();
  const { id } = useParams<NewsItemModel>();
  useEffect(() => {
    newsStories.length === 0 || newsStories.filter((nS) => nS.id.toString() === id).length === 0
      ? getNewsItem(setNewsStories, id)
      : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log('in news item: ', id);
  console.log('newsStories: ', newsStories);
  console.log(
    'newsStories.filter(nS => nS.id.toString() === id): ',
    newsStories.filter((nS) => nS.id.toString() === id),
  );
  return (
    <>
      <Meta title="news item" />
      <AbInfoHeader title="News Item" />
    </>
  );
}

export default NewsItem;
