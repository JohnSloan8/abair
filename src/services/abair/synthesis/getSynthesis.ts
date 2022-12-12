import axios from 'axios';

import { synthesisURL } from '@/config';
import { synthesisVoiceModel } from '@/store/synthesis';

const returnDialectCode = (dialect: string) => {
  if (dialect === 'Connemara') {
    return 'ga_CO';
  } else if (dialect === 'Ulster') {
    return 'ga_UL';
  } else {
    return 'ga_MU';
  }
};

const getVoiceType = (model: string) => {
  if (model === 'NEMO') {
    return 'nemo';
  } else if (model === 'DNN') {
    return 'nnmnkwii';
  } else if (model === 'HTS') {
    return 'exthts';
  } else if (model === 'HTS-WORLD') {
    return 'exthts-WORLD';
  } else {
    return '';
  }
};

const getSynthesis = async (
  text: string,
  currentVoice: synthesisVoiceModel,
  model: string,
  pitch: number,
  speed: number,
) => {
  console.log('currentVoice:', currentVoice);
  console.log('pitch:', pitch);
  const voiceType = getVoiceType(model);
  const voiceName =
    returnDialectCode(currentVoice.locale) + '_' + currentVoice.shortCode + '_' + voiceType;
  console.log('voiceName:', voiceName);
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
          speakingRate: speed,
          pitch: pitch,
          volumeGainDb: 1,
          htsParams: 'string',
          sampleRateHertz: 0,
          effectsProfileId: [],
        },
        outputType: 'JSON',
      },
      timeout: 10000,
    });
    if (data) {
      return data;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    alert('error:' + error);
    return false;
  }
};

export default getSynthesis;
