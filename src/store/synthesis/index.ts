import {
  isSynthesisAudioEmpty,
  useSynthesisAudio,
  useSynthesisAudioPlaying,
  useSynthesisAudios,
} from './audio';
import { useAwaitingSynthesis } from './server';
import { isSynthesisTextEmptyString, useSynthesisText } from './textbox';
import {
  synthesisVoiceIndexState,
  synthesisVoicesState,
  useSynthesisVoiceIndex,
  useSynthesisVoices,
} from './voice';
import {
  useSynthesisCounty,
  useSynthesisGender,
  useSynthesisModel,
  useSynthesisPitch,
  useSynthesisSpeed,
} from './voiceParameters';
import {
  filteredSynthesisVoices,
  synthesisModelOptions,
  synthesisVoiceSelected,
} from './voiceSelectors';

export {
  useSynthesisVoiceIndex,
  useSynthesisVoices,
  synthesisVoiceIndexState,
  synthesisVoicesState,
  useSynthesisText,
  isSynthesisTextEmptyString,
  useAwaitingSynthesis,
  useSynthesisAudio,
  isSynthesisAudioEmpty,
  useSynthesisAudioPlaying,
  useSynthesisAudios,
  filteredSynthesisVoices,
  synthesisVoiceSelected,
  synthesisModelOptions,
  useSynthesisCounty,
  useSynthesisGender,
  useSynthesisPitch,
  useSynthesisSpeed,
  useSynthesisModel,
};
