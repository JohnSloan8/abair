import { atom, selector, useRecoilState } from 'recoil';

import { transcriptionModel } from '@/models/transcription';

const transcriptionsState = atom<transcriptionModel[]>({
  key: 'transcriptions',
  default: [],
});

const useTranscriptions = () => {
  const [transcriptions, setTranscriptions] = useRecoilState(transcriptionsState);
  return { transcriptions, setTranscriptions };
};

const transcriptionState = atom<transcriptionModel | undefined>({
  key: 'transcription',
  default: undefined,
});

const useTranscription = () => {
  const [transcription, setTranscription] = useRecoilState(transcriptionState);
  return { transcription, setTranscription };
};

const transcriptionText = selector({
  key: 'transcription-text',
  get: ({ get }) => {
    const transcription = get(transcriptionState);
    try {
      if (transcription !== undefined) {
        const transcriptionChunks = transcription.recognition_response[0].utterance.split('\n');
        const nonEmptyTc = transcriptionChunks.filter((tC) => tC !== '');
        return nonEmptyTc[nonEmptyTc.length - 1].trim();
      } else {
        return undefined;
      }
    } catch {
      return undefined;
    }
  },
});

const editableTranscriptionTextState = atom<string | undefined | null>({
  key: 'recognition-text-state',
  default: '',
});

const useEditableTranscriptionText = () => {
  const [editableTranscriptionText, setEditableTranscriptionText] = useRecoilState(
    editableTranscriptionTextState,
  );
  return { editableTranscriptionText, setEditableTranscriptionText };
};

const editableTranscriptionTextEdited = selector({
  key: 'transcription-edited-state',
  get: ({ get }) => {
    const transcription = get(transcriptionState);
    const transcriptionTextValue = get(transcriptionText);
    const editableTranscriptionText = get(editableTranscriptionTextState);
    if (transcription === undefined) {
      return false;
    } else if (transcription.correction !== '') {
      return editableTranscriptionText !== transcription.correction;
    } else {
      return editableTranscriptionText !== transcriptionTextValue;
    }
  },
});

export {
  useTranscription,
  useTranscriptions,
  useEditableTranscriptionText,
  editableTranscriptionTextEdited,
  transcriptionText,
};
