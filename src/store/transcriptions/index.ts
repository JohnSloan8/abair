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

const editableTranscriptionTextState = atom<string>({
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
    const editableTranscriptionText = get(editableTranscriptionTextState);
    if (transcription === undefined) {
      return false;
    } else if (transcription.correction !== '') {
      return editableTranscriptionText !== transcription.correction;
    } else {
      return editableTranscriptionText !== transcription.recognition_response[0].utterance;
    }
  },
});

export {
  useTranscription,
  useTranscriptions,
  useEditableTranscriptionText,
  editableTranscriptionTextEdited,
};
