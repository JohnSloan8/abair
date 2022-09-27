import { SetterOrUpdater } from 'recoil';

import { transcriptionModel } from '@/models/transcription';
import supabase from '@/services/supabase';

const patchTranscription = async (
  id: number,
  correct: boolean | null,
  correction: string,
  corrected: boolean,
  setter: SetterOrUpdater<transcriptionModel>,
) => {
  try {
    const { data, error } = await supabase
      .from('transcriptions')
      .upsert([
        {
          id: id,
          correct: correct,
          correction: correction,
          corrected: corrected,
        },
      ])
      .select();

    if (error) {
      throw error;
    }

    if (data) {
      setter({
        id: data[0].id,
        user: data[0].user,
        session_start: data[0].session_start,
        audio_file_path: data[0].audio_file_path,
        duration: data[0].duration,
        recognition_response: data[0].recognition_response,
        correct: data[0].correct,
        correction: data[0].correction,
        corrected: data[0].corrected,
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    alert(error.message);
  }
};

export default patchTranscription;
