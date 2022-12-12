import { selector } from 'recoil';

import { synthesisVoiceModel } from '@/models/synthesis';

import { synthesisVoiceIndexState, synthesisVoicesState } from './voice';
import { synthesisCountyState, synthesisGenderState, synthesisModelState } from './voiceParameters';

const synthesisVoiceSelected = selector<synthesisVoiceModel | undefined>({
  key: 'synthesis-voice-selected',
  get: ({ get }) => {
    const selectedVoiceIndex = get(synthesisVoiceIndexState);
    const voice = get(synthesisVoicesState);
    if (selectedVoiceIndex === -1) {
      return undefined;
    } else {
      return voice[selectedVoiceIndex];
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

const filteredSynthesisVoices = selector({
  key: 'synthesis-voice-options',
  get: ({ get }) => {
    const list = get(synthesisVoicesState);
    const countyState = get(synthesisCountyState);
    const genderState = get(synthesisGenderState);
    const modelState = get(synthesisModelState);

    const countyFilter = (l: synthesisVoiceModel[]) => {
      switch (countyState) {
        case 'Ulster':
          return l.filter((item: synthesisVoiceModel) => item.locale === 'Ulster');
        case 'Connemara':
          return l.filter((item: synthesisVoiceModel) => item.locale === 'Connemara');
        case 'Munster':
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

export { filteredSynthesisVoices, synthesisVoiceSelected, synthesisModelOptions };
