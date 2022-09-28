import { atom, useRecoilState } from 'recoil';

const frontPageAudioState = atom<string>({
  key: 'front-page-audio-state',
  default: '',
});

const useFrontPageAudio = () => {
  const [frontPageAudio, setFrontPageAudio] = useRecoilState(frontPageAudioState);

  return { frontPageAudio, setFrontPageAudio };
};

export { useFrontPageAudio };
