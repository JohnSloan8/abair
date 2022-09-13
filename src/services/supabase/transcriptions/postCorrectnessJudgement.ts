import { transcriptionModel } from '@/models/transcription';
import { supabase } from '@/services/supabase';

const postCorrectnessJudgement = async (transcription: transcriptionModel, correct: boolean) => {
  try {
    const { error, status } = await supabase.from('transcriptions').update([
      {
        id: transcription.id,
        correct: correct,
      },
    ]);
    if (error) {
      throw error;
    }
    if (status === 204) {
      console.log('successful postCorrectnessJudgement');
      return true;
    } else {
      return false;
    }
  } catch (error) {
    alert(error.message);
  }
};

export default postCorrectnessJudgement;
