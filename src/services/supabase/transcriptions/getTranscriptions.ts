import supabase from '@/services/supabase';

const getTranscriptions = async (userID: string) => {
  try {
    const { data, error, status } = await supabase
      .from('transcriptions')
      .select(`id, created_at, model, text, correct, correction, corrected`)
      .eq('user', userID);
    console.log('transcription status:', status);

    if (data) {
      console.log('transcriptions:', data);
      return data;
    }

    if (error) {
      throw error;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    alert(error.message);
  }
};

export default getTranscriptions;
