import { atom, useRecoilState } from 'recoil';

import { synthesisVoiceModel } from '@/models/synthesis';

const synthesisVoiceIndexState = atom<number>({
  key: 'synthesis-voice-index',
  default: -1,
});

const useSynthesisVoiceIndex = () => {
  const [synthesisVoiceIndex, setSynthesisVoiceIndex] = useRecoilState(synthesisVoiceIndexState);
  return { synthesisVoiceIndex, setSynthesisVoiceIndex };
};

const synthesisVoicesState = atom<synthesisVoiceModel[]>({
  key: 'synthesis-voice-options-state',
  default: [],
});

const useSynthesisVoices = () => {
  const [synthesisVoices, setSynthesisVoices] = useRecoilState(synthesisVoicesState);
  return { synthesisVoices, setSynthesisVoices };
};

export {
  useSynthesisVoiceIndex,
  useSynthesisVoices,
  synthesisVoiceIndexState,
  synthesisVoicesState,
};
