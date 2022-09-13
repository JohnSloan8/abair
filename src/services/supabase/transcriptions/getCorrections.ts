import { supabase } from '@/services/supabase';

const getCorrections = async (userID: string) => {
  try {
    const { data, error, status } = await supabase
      .from('transcription_corrections')
      .select(`id, start, end, correction_text, transcription_id`)
      .eq('user_id', userID);
    console.log('correction status:', status);

    if (data) {
      console.log('corrections:', data);
      return data;
    }

    if (error) {
      throw error;
    }
  } catch (error) {
    alert(error.message);
  }
};

export default getCorrections;
