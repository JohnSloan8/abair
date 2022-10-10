import supabase from '@/services/supabase';

const getNews = async () => {
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
      return data;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    alert(e.message);
  }
};

export default getNews;
