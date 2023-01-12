import { SetterOrUpdater } from 'recoil';

import { Database } from '../../../types/supabase';

const updateTranscriptions = (
  id: number,
  correct: boolean | null,
  corrected: boolean,
  correction: string,
  transcriptions: Database['public']['Tables']['transcriptions']['Row'][],
  setter: SetterOrUpdater<Database['public']['Tables']['transcriptions']['Row'][]>,
) => {
  setter(
    [...transcriptions].map((item) => {
      if (item.id === id)
        return { ...item, correct: correct, correction: correction, corrected: corrected };
      else return item;
    }),
  );
};

const appendTranscription = (
  transcription: Database['public']['Tables']['transcriptions']['Row'],
  transcriptions: Database['public']['Tables']['transcriptions']['Row'][],
  setter: SetterOrUpdater<Database['public']['Tables']['transcriptions']['Row'][]>,
) => {
  setter([...transcriptions, transcription]);
};

export { updateTranscriptions, appendTranscription };
