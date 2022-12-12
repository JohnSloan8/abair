import { atom, useRecoilState } from 'recoil';

const awaitingTranscriptionState = atom<boolean>({
  key: 'awaiting-transcription-state',
  default: false,
});

const useAwaitingTranscription = () => {
  const [awaitingTranscription, setAwaitingTranscription] = useRecoilState(
    awaitingTranscriptionState,
  );

  return { awaitingTranscription, setAwaitingTranscription };
};

export { useAwaitingTranscription };
