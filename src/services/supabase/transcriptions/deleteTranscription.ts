import supabase from '@/services/supabase';

const deleteTranscription = async (id: number) => {
  try {
    const { data, error } = await supabase.from('transcriptions').delete().match({ id: id });

    if (error) {
      throw error;
    }

    if (data) {
      console.log('delete data:', data);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    alert(error.message);
  }
};

export default deleteTranscription;
