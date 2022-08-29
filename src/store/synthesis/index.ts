import { atom, selector, useRecoilState } from 'recoil';
import { SetterOrUpdater } from 'recoil';

const synthesisTextState = atom<string>({
  key: 'synthesis-text-state',
  default: '',
});

const useSynthesisText = () => {
  const [synthesisText, setSynthesisText] = useRecoilState(synthesisTextState);
  return { synthesisText, setSynthesisText };
};

const isSynthesisTextEmptyString = selector({
  key: 'synthesisTextEmptyStringState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(synthesisTextState);
    return text.length > 0 ? false : true;
  },
});

const synthesisAudioState = atom<string>({
  key: 'synthesis-audio-state',
  default: '',
});

const useSynthesisAudio = () => {
  const [synthesisAudio, setSynthesisAudio] = useRecoilState(synthesisAudioState);

  return { synthesisAudio, setSynthesisAudio };
};

const isSynthesisAudioEmpty = selector({
  key: 'synthesis-audio-empty-state', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const data = get(synthesisAudioState);
    return data.length > 0 ? false : true;
  },
});

const synthesisDialectState = atom<string>({
  key: 'synthesis-dialect-state',
  default: 'all',
});

const useSynthesisDialect = () => {
  const [synthesisDialect, setSynthesisDialect] = useRecoilState(synthesisDialectState);

  return { synthesisDialect, setSynthesisDialect };
};

const synthesisAccordionState = atom<boolean>({
  key: 'synthesis-accordion-state',
  default: false,
});

const useSynthesisAccordion = () => {
  const [synthesisAccordion, setSynthesisAccordion] = useRecoilState(synthesisAccordionState);

  return { synthesisAccordion, setSynthesisAccordion };
};

const synthesisGenderState = atom<string>({
  key: 'synthesis-gender-state',
  default: 'all',
});

const useSynthesisGender = () => {
  const [synthesisGender, setSynthesisGender] = useRecoilState(synthesisGenderState);

  return { synthesisGender, setSynthesisGender };
};

const synthesisModeState = atom<string>({
  key: 'synthesis-mode-state',
  default: 'all',
});

const useSynthesisMode = () => {
  const [synthesisMode, setSynthesisMode] = useRecoilState(synthesisModeState);

  return { synthesisMode, setSynthesisMode };
};

const synthesisSpeedState = atom<string>({
  key: 'synthesis-speed-state',
  default: 'normal',
});

const useSynthesisSpeed = () => {
  const [synthesisSpeed, setSynthesisSpeed] = useRecoilState(synthesisSpeedState);

  return { synthesisSpeed, setSynthesisSpeed };
};

const synthesisPitchState = atom<string>({
  key: 'synthesis-pitch-state',
  default: 'normal',
});

const useSynthesisPitch = () => {
  const [synthesisPitch, setSynthesisPitch] = useRecoilState(synthesisPitchState);

  return { synthesisPitch, setSynthesisPitch };
};

const synthesisMetadataState = atom<[]>({
  key: 'synthesis-metadata-state',
  default: [],
});

const useSynthesisMetadata = () => {
  const [synthesisMetadata, setSynthesisMetadata] = useRecoilState(synthesisMetadataState);

  return { synthesisMetadata, setSynthesisMetadata };
};

interface voiceOptionsModel {
  name: string;
  getter: string;
  setter: SetterOrUpdater<string>;
  options: string[];
}

const VoiceOptionsState = atom<voiceOptionsModel[]>({
  key: 'synthesis-voice-options-state',
  default: [],
});

const useVoiceOptions = () => {
  const [voiceOptions, setVoiceOptions] = useRecoilState(VoiceOptionsState);
  return { voiceOptions, setVoiceOptions };
};

export {
  useSynthesisText,
  isSynthesisTextEmptyString,
  useSynthesisAudio,
  isSynthesisAudioEmpty,
  useSynthesisDialect,
  useSynthesisAccordion,
  useSynthesisGender,
  useSynthesisMode,
  useSynthesisSpeed,
  useSynthesisPitch,
  useSynthesisMetadata,
  useVoiceOptions,
};

export type { voiceOptionsModel };
