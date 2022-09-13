import { atom, useRecoilState } from 'recoil';

import { correctionModel, transcriptionModel } from '@/models/transcription';

const transcriptionsState = atom<transcriptionModel[]>({
  key: 'transcriptions',
  default: [],
});

const useTranscriptions = () => {
  const [transcriptions, setTranscriptions] = useRecoilState(transcriptionsState);
  return { transcriptions, setTranscriptions };
};

const correctionsState = atom<correctionModel[]>({
  key: 'corrections',
  default: [],
});

const useCorrections = () => {
  const [corrections, setCorrections] = useRecoilState(correctionsState);
  return { corrections, setCorrections };
};

export { useTranscriptions, useCorrections };
