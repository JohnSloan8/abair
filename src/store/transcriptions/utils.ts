import { SetterOrUpdater } from 'recoil';

import { transcriptionModel } from '@/models/transcription';

const updateTranscriptions = (
  id: number,
  correct: boolean | null,
  correction: string | null,
  corrected: boolean,
  transcriptions: transcriptionModel[],
  setter: SetterOrUpdater<transcriptionModel[]>,
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
  transcription: transcriptionModel,
  transcriptions: transcriptionModel[],
  setter: SetterOrUpdater<transcriptionModel[]>,
) => {
  setter([...transcriptions, transcription]);
};

export { updateTranscriptions, appendTranscription };
