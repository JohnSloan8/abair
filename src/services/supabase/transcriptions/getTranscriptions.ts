import supabase from '@/services/supabase';

const getTranscriptions = async (userID: string) => {
  try {
    const { data, error } = await supabase
      .from('transcriptions')
      .select(`id, created_at, recognition_response, correction, corrected`)
      .eq('user', userID);

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
