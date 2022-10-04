import supabase from '@/services/supabase';

const patchTranscription = async (id: number, correction: string, corrected: boolean) => {
  try {
    const { data, error } = await supabase
      .from('transcriptions')
      .upsert([
        {
          id: id,
          correction: correction,
          corrected: corrected,
        },
      ])
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

export default patchTranscription;
