import { atom, useRecoilState } from 'recoil';

import { transcriptionModel } from '@/models/transcription';

const transcriptionsState = atom<transcriptionModel[]>({
  key: 'transcriptions',
  default: [],
});

const useTranscriptions = () => {
  const [transcriptions, setTranscriptions] = useRecoilState(transcriptionsState);
  return { transcriptions, setTranscriptions };
};

const transcriptionState = atom<transcriptionModel>({
  key: 'transcription',
  default: undefined,
});

const useTranscription = () => {
  const [transcription, setTranscription] = useRecoilState(transcriptionState);
  return { transcription, setTranscription };
};

export { useTranscription, useTranscriptions };
