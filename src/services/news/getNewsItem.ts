import { SetterOrUpdater } from 'recoil';

import { AbNewsStoryModel } from '@/components/AbNewsStory/AbNewsStory';
import { supabase } from '@/services/supabase';

const getNewsItem = async (dataSetter: SetterOrUpdater<AbNewsStoryModel[]>, id: number) => {
  try {
    // setLoading(true);
    const numberID = parseInt(id);
    console.log('numberID:', numberID);
    const { data, error, status } = await supabase
      .from('news_stories')
      .select(`id, date, title, blurb, body, images`)
      .eq('id', id);

    if (error && status !== 406) {
      throw error;
    } else {
      console.log('error:', error);
    }

    if (data) {
      console.log('data:', data);
      dataSetter(data);
    }
  } catch (e) {
    alert(e.message);
  } finally {
    console.log('done getting news');
  }
};

export default getNewsItem;
