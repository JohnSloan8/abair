import { atom, selector, useRecoilState } from 'recoil';

interface synthesisVoiceModel {
  name: string;
  gender: string;
  locale: string;
  shortCode: string;
  voices: string[];
  pitch?: number[];
  speed?: number[];
}

const synthesisVoiceState = atom<synthesisVoiceModel>({
  key: 'synthesis-voice',
  default: {
    name: '',
    gender: '',
    locale: '',
    shortCode: '',
    voices: [],
    pitch: [0.5, 1.5],
    speed: [0.5, 1.5],
  },
});

const useSynthesisVoice = () => {
  const [synthesisVoice, setSynthesisVoice] = useRecoilState(synthesisVoiceState);
  return { synthesisVoice, setSynthesisVoice };
};

const synthesisVoiceOptionsState = atom<synthesisVoiceModel[]>({
  key: 'synthesis-voice-options',
  default: [],
});

const useSynthesisVoiceOptions = () => {
  const [synthesisVoiceOptions, setSynthesisVoiceOptions] = useRecoilState(
    synthesisVoiceOptionsState,
  );
  return { synthesisVoiceOptions, setSynthesisVoiceOptions };
};

const synthesisMapFilterState = atom({
  key: 'synthesis-map-filter',
  default: 'all',
});

const useSynthesisMapFilter = () => {
  const [synthesisMapFilter, setSynthesisMapFilter] = useRecoilState(synthesisMapFilterState);
  return { synthesisMapFilter, setSynthesisMapFilter };
};

const synthesisModeFilterState = atom({
  key: 'synthesis-mode-filter',
  default: 'all',
});

const synthesisGenderFilterState = atom({
  key: 'synthesis-gender-filter',
  default: 'all',
});

const filteredSynthesisVoiceOptionsState = selector({
  key: 'filtered-synthesis-voice-options',
  get: ({ get }) => {
    const list = get(synthesisVoiceOptionsState);
    const mapState = get(synthesisMapFilterState);
    const genderState = get(synthesisGenderFilterState);
    const modeState = get(synthesisModeFilterState);

    const filterMap = (l) => {
      switch (mapState) {
        case 'Donegal':
          return l.filter((item) => item.locale === 'Ulster');
        case 'Galway':
          return l.filter((item) => item.locale === 'Connemara');
        case 'Kerry':
          return l.filter((item) => item.locale === 'Munster');
        default:
          return l;
      }
    };

    const filterGender = (l) => {
      switch (genderState) {
        case 'male':
          return l.filter((item) => item.gender === 'male');
        case 'female':
          return l.filter((item) => item.gender === 'female');
        case 'neutral':
          return l.filter((item) => item.gender === 'neutral');
        default:
          return l;
      }
    };

    const filterMode = (l) => {
      switch (modeState) {
        case 'HTS':
          return l.filter((item) => item.mode === 'HTS');
        case 'DNN':
          return l.filter((item) => item.mode === 'DNN');
        case 'neutral':
          return l.filter((item) => item.mode === 'neutral');
        default:
          return l;
      }
    };

    const filteredMap = filterMap(list);
    const filteredGender = filterGender(filteredMap);
    const filteredMode = filterMode(filteredGender);
    return filteredMode;
  },
});

export {
  filteredSynthesisVoiceOptionsState,
  useSynthesisVoice,
  useSynthesisVoiceOptions,
  synthesisVoiceState,
  useSynthesisMapFilter,
  synthesisMapFilterState,
};

export type { synthesisVoiceModel };

// const synthesisVoiceOptionsState = atom<synthesisVoiceOptionsModel[]>({
//   key: 'synthesis-voice-options-state',
//   default: [],
// });

// const useSynthesisMetadata = () => {
//   const [synthesisVoiceOptions, setSynthesisVoiceOptions] = useRecoilState(
//     synthesisVoiceOptionsState,
//   );

//   return { synthesisVoiceOptions, setSynthesisVoiceOptions };
// };

// interface voiceOptionsModel {
//   name: string;
//   getter: string;
//   setter: SetterOrUpdater<string>;
//   options: string[];
// }
