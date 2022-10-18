import { atom, selector, useRecoilState } from 'recoil';

interface synthesisVoiceModel {
  name: string;
  gender: string;
  locale: string;
  mode?: string;
  shortCode: string;
  voices: string[];
  pitchRange: number[];
  speedRange: number[];
  pitch: number;
  speed: number;
}

const synthesisVoiceIndexState = atom<number>({
  key: 'synthesis-voice-index',
  default: -1,
});

const useSynthesisVoiceIndex = () => {
  const [synthesisVoiceIndex, setSynthesisVoiceIndex] = useRecoilState(synthesisVoiceIndexState);
  return { synthesisVoiceIndex, setSynthesisVoiceIndex };
};

const synthesisVoiceOptionsState = atom<synthesisVoiceModel[]>({
  key: 'synthesis-voice-options-state',
  default: [],
});

const useSynthesisVoiceOptions = () => {
  const [synthesisVoiceOptions, setSynthesisVoiceOptions] = useRecoilState(
    synthesisVoiceOptionsState,
  );
  return { synthesisVoiceOptions, setSynthesisVoiceOptions };
};

const synthesisVoiceSelected = selector<synthesisVoiceModel | undefined>({
  key: 'synthesis-voice-selected',
  get: ({ get }) => {
    const selectedVoiceIndex = get(synthesisVoiceIndexState);
    const voiceOptions = get(synthesisVoiceOptionsState);
    if (selectedVoiceIndex === -1) {
      return undefined;
    } else {
      return voiceOptions[selectedVoiceIndex];
    }
  },
});

const synthesisModelOptions = selector<string[]>({
  key: 'synthesis-model-options',
  get: ({ get }) => {
    const synthesisVoiceSelectedValue = get(synthesisVoiceSelected);
    if (synthesisVoiceSelectedValue !== undefined) {
      return synthesisVoiceSelectedValue.voices;
    } else {
      return [];
    }
  },
});

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
  default: 'Galway',
});

const useSynthesisCounty = () => {
  const [synthesisCounty, setSynthesisCounty] = useRecoilState(synthesisCountyState);
  return { synthesisCounty, setSynthesisCounty };
};

const synthesisGenderState = atom<string>({
  key: 'synthesis-gender',
  default: 'female',
});

const synthesisModelState = atom<string>({
  key: 'synthesis-Model',
  default: '',
});

const useSynthesisModel = () => {
  const [synthesisModel, setSynthesisModel] = useRecoilState(synthesisModelState);
  return { synthesisModel, setSynthesisModel };
};

const useSynthesisGender = () => {
  const [synthesisGender, setSynthesisGender] = useRecoilState(synthesisGenderState);
  return { synthesisGender, setSynthesisGender };
};

const filteredSynthesisVoiceOptions = selector({
  key: 'synthesis-voice-options',
  get: ({ get }) => {
    const list = get(synthesisVoiceOptionsState);
    const countyState = get(synthesisCountyState);
    const genderState = get(synthesisGenderState);
    const modelState = get(synthesisModelState);

    const countyFilter = (l: synthesisVoiceModel[]) => {
      switch (countyState) {
        case 'Donegal':
          return l.filter((item: synthesisVoiceModel) => item.locale === 'Ulster');
        case 'Galway':
          return l.filter((item: synthesisVoiceModel) => item.locale === 'Connemara');
        case 'Kerry':
          return l.filter((item: synthesisVoiceModel) => item.locale === 'Munster');
        default:
          return l;
      }
    };

    const genderFilter = (l: synthesisVoiceModel[]) => {
      switch (genderState) {
        case 'male':
          return l.filter((item: synthesisVoiceModel) => item.gender === 'male');
        case 'female':
          return l.filter((item: synthesisVoiceModel) => item.gender === 'female');
        default:
          return l;
      }
    };

    const modelFilter = (l: synthesisVoiceModel[]) => {
      switch (modelState) {
        case 'HTS':
          return l.filter((item: synthesisVoiceModel) => item.voices.includes('HTS'));
        case 'DNN':
          return l.filter((item: synthesisVoiceModel) => item.voices.includes('DNN'));
        case 'HTS-WORLD':
          return l.filter((item: synthesisVoiceModel) => item.voices.includes('HTS-WORLD'));
        case 'NEMO':
          return l.filter((item: synthesisVoiceModel) => item.voices.includes('NEMO'));
        default:
          return l;
      }
    };

    if (list !== undefined && list.length !== 0) {
      const filteredCounty = countyFilter(list);
      const filteredGender = genderFilter(filteredCounty);
      const filteredModel = modelFilter(filteredGender);
      return filteredModel;
    } else {
      return undefined;
    }
  },
});

export {
  filteredSynthesisVoiceOptions,
  useSynthesisVoiceIndex,
  useSynthesisVoiceOptions,
  useSynthesisCounty,
  synthesisCountyState,
  useSynthesisGender,
  useSynthesisPitch,
  useSynthesisSpeed,
  useSynthesisModel,
  synthesisVoiceSelected,
  synthesisVoiceIndexState,
  synthesisModelOptions,
};

export type { synthesisVoiceModel };
