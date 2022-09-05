/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import AbInfoHeader from '@/components/AbInfoHeader';
import AbNewsStory from '@/components/AbNewsStory';
import { AbNewsStoryModel } from '@/components/AbNewsStory/AbNewsStory';
import Meta from '@/components/Meta';
import { supabase } from '@/services/supabase';
import { useNewsStories } from '@/store/news';

function News() {
  // const [loading, setLoading] = useState(false);
  const { newsStories, setNewsStories } = useNewsStories();
  useEffect(() => {
    getNewsStories();
  }, []);

  const getNewsStories = async () => {
    try {
      // setLoading(true);

      const { data, error, status } = await supabase
        .from('news_stories')
        .select(`id, date, title, blurb, body, images`);

      if (error && status !== 406) {
        throw error;
      } else {
        console.log('error:', error);
      }

      if (data) {
        console.log('data:', data);
        setNewsStories(data);
      }
    } catch (e) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Meta title="news" />
      <AbInfoHeader title="News" />
      {newsStories.map((nS: AbNewsStoryModel, i: number) => (
        <AbNewsStory
          key={i}
          id={nS.id}
          title={nS.title}
          blurb={nS.blurb}
          body={nS.body}
          images={nS.images}
        />
      ))}
    </>
  );
}

export default News;
