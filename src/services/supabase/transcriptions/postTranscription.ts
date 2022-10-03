import { transcriptionModel } from '@/models/transcription';
import supabase from '@/services/supabase';

const postTranscription = async (transcriptionData: transcriptionModel) => {
  try {
    const { data, error } = await supabase
      .from('transcriptions')
      .insert([transcriptionData])
      .select();

    if (error) {
      throw error;
    }

    if (data) {
      console.log('data:', data);
      return data[0];
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    alert(error.message);
  }
};

export default postTranscription;
