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

export { useTranscriptions };
