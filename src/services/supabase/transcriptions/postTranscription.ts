import supabase from '@/services/supabase';

import { Database } from '../../../../types/supabase';

const postTranscription = async (
  transcriptionData: Database['public']['Tables']['transcriptions']['Insert'],
) => {
  try {
    const { data, error } = await supabase
      .from('transcriptions')
      .insert([transcriptionData])
      .select();

    if (error) {
      throw error;
    }

    if (data) {
      return data[0];
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    alert(error.message);
  }
};

export default postTranscription;
