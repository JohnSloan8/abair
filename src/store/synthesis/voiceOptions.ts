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

const synthesisVoiceSelected = selector<synthesisVoiceModel>({
  key: 'synthesis-voice-selected',
  get: ({ get }) => {
    const selectedVoiceIndex = get(synthesisVoiceIndexState);
    const voiceOptions = get(synthesisVoiceOptionsState);
    if (selectedVoiceIndex === -1) {
      return {
        name: 'Áine',
        gender: 'all',
        locale: 'all',
        shortCode: 'anb',
        voices: [],
        pitchRange: [0.5, 1.5],
        speedRange: [0.5, 1.5],
        speed: 1,
        pitch: 1,
      };
    } else {
      return voiceOptions[selectedVoiceIndex];
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

const synthesisModeState = atom<string>({
  key: 'synthesis-mode',
  default: 'all',
});

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
    const modeState = get(synthesisModeState);

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
        case 'neutral':
          return l.filter((item: synthesisVoiceModel) => item.gender === 'neutral');
        default:
          return l;
      }
    };

    const modeFilter = (l: synthesisVoiceModel[]) => {
      switch (modeState) {
        case 'HTS':
          return l.filter((item: synthesisVoiceModel) => item.mode === 'HTS');
        case 'DNN':
          return l.filter((item: synthesisVoiceModel) => item.mode === 'DNN');
        case 'neutral':
          return l.filter((item: synthesisVoiceModel) => item.mode === 'neutral');
        default:
          return l;
      }
    };

    console.log('list:', list);
    const filteredCounty = countyFilter(list);
    const filteredGender = genderFilter(filteredCounty);
    const filteredMode = modeFilter(filteredGender);
    return filteredMode;
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
  synthesisVoiceSelected,
  synthesisVoiceIndexState,
};

export type { synthesisVoiceModel };
