import { selector } from 'recoil';

import { recognitionAudioState } from './audio';

const isRecognitionAudioEmpty = selector({
  key: 'recognition-audio-empty-state',
  get: ({ get }) => {
    const data = get(recognitionAudioState);
    if (data) {
      return data.length > 0 ? false : true;
    }
    return true;
  },
});

export { isRecognitionAudioEmpty };
