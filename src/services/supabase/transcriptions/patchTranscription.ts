// import { transcriptionModel } from '@/models/transcription';
import supabase from '@/services/supabase';

const patchTranscription = async (
  id: number,
  correct: boolean | null,
  correction: string | null,
  corrected: boolean,
) => {
  try {
    const { error, status } = await supabase.from('transcriptions').upsert([
      {
        id: id,
        correct: correct,
        correction: correction,
        corrected: corrected,
      },
    ]);

    console.log('transcription status:', status);

    if (error) {
      throw error;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    alert(error.message);
  }
};

export default patchTranscription;
