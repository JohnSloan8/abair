import { atom, useRecoilState } from 'recoil';

const synthesisPitchState = atom<number>({
  key: 'synthesis-pitch',
  default: 1,
});

const useSynthesisPitch = () => {
  const [synthesisPitch, setSynthesisPitch] = useRecoilState(synthesisPitchState);
  return { synthesisPitch, setSynthesisPitch };
};

const synthesisSpeedState = atom<number>({
  key: 'synthesis-speed',
  default: 1,
});

const useSynthesisSpeed = () => {
  const [synthesisSpeed, setSynthesisSpeed] = useRecoilState(synthesisSpeedState);
  return { synthesisSpeed, setSynthesisSpeed };
};

const synthesisCountyState = atom<string>({
  key: 'synthesis-county',
  default: 'Connemara',
});

const useSynthesisCounty = () => {
  const [synthesisCounty, setSynthesisCounty] = useRecoilState(synthesisCountyState);
  return { synthesisCounty, setSynthesisCounty };
};

const synthesisModelState = atom<string>({
  key: 'synthesis-Model',
  default: '',
});

const useSynthesisModel = () => {
  const [synthesisModel, setSynthesisModel] = useRecoilState(synthesisModelState);
  return { synthesisModel, setSynthesisModel };
};

const synthesisGenderState = atom<string>({
  key: 'synthesis-gender',
  default: 'female',
});

const useSynthesisGender = () => {
  const [synthesisGender, setSynthesisGender] = useRecoilState(synthesisGenderState);
  return { synthesisGender, setSynthesisGender };
};

export {
  useSynthesisCounty,
  synthesisCountyState,
  useSynthesisGender,
  synthesisGenderState,
  useSynthesisPitch,
  useSynthesisSpeed,
  useSynthesisModel,
  synthesisModelState,
};
