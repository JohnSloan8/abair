import axios from 'axios';

import { synthesisURL } from '@/config';
import { synthesisVoiceModel } from '@/store/synthesis/voiceOptions';

const returnDialectCode = (dialect: string) => {
  if (dialect === 'Connemara') {
    return 'ga_CO';
  } else if (dialect === 'Ulster') {
    return 'ga_UL';
  } else {
    return 'ga_MU';
  }
};

const getVoiceType = (cV: synthesisVoiceModel) => {
  if (cV.voices.includes('NEMO')) {
    return 'nemo';
  } else if (cV.voices.includes('DNN')) {
    return 'nnmnkwii';
  } else if (cV.voices.includes('HTS')) {
    return 'exthts';
  } else if (cV.voices.includes('HTS-WORLD')) {
    return 'exthts-WORLD';
  } else {
    return '';
  }
};

const getSynthesis = async (text: string, currentVoice: synthesisVoiceModel) => {
  const voiceType = getVoiceType(currentVoice);
  const voiceName =
    returnDialectCode(currentVoice.locale) + '_' + currentVoice.shortCode + '_' + voiceType;
  try {
    const { data } = await axios({
      method: 'post',
      url: synthesisURL,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        synthinput: {
          text: text,
          ssml: 'string',
        },
        voiceparams: {
          languageCode: 'ga-IE',
          name: voiceName,
          ssmlGender: 'UNSPECIFIED',
        },
        audioconfig: {
          audioEncoding: 'LINEAR16',
          speakingRate: currentVoice.speed,
          pitch: currentVoice.pitch,
          volumeGainDb: 1,
          htsParams: 'string',
          sampleRateHertz: 0,
          effectsProfileId: [],
        },
        outputType: 'JSON',
      },
    });
    if (data) {
      return data;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    alert(error.message);
  }
};

export default getSynthesis;
