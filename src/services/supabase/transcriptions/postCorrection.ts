import { transcriptionModel } from '@/models/transcription';
import { supabase } from '@/services/supabase';

const postCorrection = async (
  transcription: transcriptionModel,
  correct: boolean | null,
  correction: string | null,
  corrected: boolean,
) => {
  try {
    const { error, status } = await supabase.from('transcriptions').update([
      {
        id: transcription.id,
        correct: correct,
        correction: correction,
        corrected: corrected,
      },
    ]);
    if (error) {
      throw error;
    }
    if (status === 204) {
      console.log('successful postCorrection');
      return true;
    } else {
      return false;
    }
  } catch (error) {
    alert(error.message);
  }
};

export default postCorrection;
