import supabase from '@/services/supabase';

const getThisSessionTranscriptions = async (sessionStart: string) => {
  try {
    const { data, error } = await supabase
      .from('transcriptions')
      .select(`id, created_at, recognition_response, correction, corrected`)
      .eq('session_start', sessionStart);

    if (data) {
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

export default getThisSessionTranscriptions;
