import { SetterOrUpdater } from 'recoil';

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

const getVoiceType = (cV) => {
  if (cV.voices.includes('NEMO')) {
    return 'nemo';
  } else if (cV.voices.includes('DNN')) {
    return 'nnmnkwii';
  } else if (cV.voices.includes('HTS')) {
    return 'exthts';
  } else {
    return '';
  }
};

const getSynthesis = (
  text: string,
  currentVoice: synthesisVoiceModel,
  setter: SetterOrUpdater<string>,
) => {
  const voiceType = getVoiceType(currentVoice);
  const voiceName =
    returnDialectCode(currentVoice.locale) + '_' + currentVoice.shortCode + '_' + voiceType;
  console.log('voiceName:', voiceName);
  axios({
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
  })
    .then(function (response) {
      console.log('setter:', setter);
      setter('data:audio/wav;base64,' + response.data.audioContent);
      console.log('data:audio/wav;base64,' + response.data.audioContent);
    })
    .catch(function (error) {
      alert('error:' + error);
      return 'problem';
    })
    .then(function () {
      console.log('synthesis complete');
    });
};
// const SynthesisController = () => {
//   return true;
// };

// const getSynthesis = (getter: string, setter: SetterOrUpdater<string>) => {
//   axios({
//     // method: 'post',
//     // // url: 'https://phoneticsrv3.lcs.tcd.ie/nemo/synthesise',
//     // url: 'https://abair.ie/api2/synthesise/',
//     // headers: {
//     //   'Content-Type': 'application/json',
//     // },
//     // data: {
//     //   input: synthesisText,
//     //   voice: getVoice(synthesisGender, synthesisDialect) + '.nemo',
//     //   speaker: null,
//     //   outputType: 'JSON',
//     //   audioEncoding: 'wav',
//     //   cutSilence: false,
//     //   speed: speedNum[synthesisSpeed],
//     //   ps: null,
//     //   pa: pitchNum[synthesisPitch],
//     // },
//     method: 'get',
//     // url: 'https://phoneticsrv3.lcs.tcd.ie/nemo/synthesise',
//     url: 'https://abair.ie/api2/synthesise',
//     headers: {
//       accept: 'application/json',
//     },
//     params: {
//       input: getter,
//       voice: 'ga_UL_anb_nnmnkwii',
//       outputType: 'JSON',
//       audioEncoding: 'LINEAR16',
//       speed: 1,
//       pitch: 1,
//     },
//   })
//     .then(function (response) {
//       // console.log(response);
//       console.log(response.data);
//       setter('data:audio/wav;base64,' + response.data.audioContent);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//     .then(function () {
//       // always executed
//     });
//   return true;
//   // synthesisController(
//   //   synthesisText,
//   //   synthesisDialect,
//   //   synthesisGender,
//   //   synthesisSpeed,
//   //   synthesisPitch,
//   //   synthesisMode,
//   //   setSynthesisAudio,
//   // );
// };

export default getSynthesis;
