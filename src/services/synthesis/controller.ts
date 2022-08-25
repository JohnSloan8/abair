import { SetterOrUpdater } from 'recoil';

import axios from 'axios';

// import axios from 'axios';

// import { synthesisURL } from '@/config';

// import {
//   dialectType,
//   genderType,
//   getVoice,
//   modeType,
//   pitchNum,
//   pitchType,
//   speedNum,
//   speedType,
// } from './types';

// const SynthesisController = (
//   text: string,
//   dialect: dialectType,
//   gender: genderType,
//   speed: speedType,
//   pitch: pitchType,
//   mode: modeType,
//   setter: SetterOrUpdater<string>,
// ) => {
//   axios({
//     method: 'post',
//     url: synthesisURL,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     data: {
//       input: text,
//       voice: getVoice(gender, dialect) + '.nemo',
//       speaker: null,
//       outputType: 'JSON',
//       audioEncoding: 'wav',
//       cutSilence: false,
//       speed: speedNum[speed],
//       ps: null,
//       pa: pitchNum[pitch],
//     },
//   })
//     .then(function (response) {
//       setter('data:audio/wav;base64,' + response.data.audioContent);
//     })
//     .catch(function (error) {
//       alert('error:' + error);
//       return 'problem';
//     })
//     .then(function () {
//       console.log('synthesis complete');
//     });
// };
// const SynthesisController = () => {
//   return true;
// };

const getSynthesis = (getter: string, setter: SetterOrUpdater<string>) => {
  axios({
    // method: 'post',
    // // url: 'https://phoneticsrv3.lcs.tcd.ie/nemo/synthesise',
    // url: 'https://abair.ie/api2/synthesise/',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
    // data: {
    //   input: synthesisText,
    //   voice: getVoice(synthesisGender, synthesisDialect) + '.nemo',
    //   speaker: null,
    //   outputType: 'JSON',
    //   audioEncoding: 'wav',
    //   cutSilence: false,
    //   speed: speedNum[synthesisSpeed],
    //   ps: null,
    //   pa: pitchNum[synthesisPitch],
    // },
    method: 'get',
    // url: 'https://phoneticsrv3.lcs.tcd.ie/nemo/synthesise',
    url: 'https://abair.ie/api2/synthesise',
    headers: {
      accept: 'application/json',
    },
    params: {
      input: getter,
      voice: 'ga_UL_anb_nnmnkwii',
      outputType: 'JSON',
      audioEncoding: 'LINEAR16',
      speed: 1,
      pitch: 1,
    },
  })
    .then(function (response) {
      // console.log(response);
      console.log(response.data);
      setter('data:audio/wav;base64,' + response.data.audioContent);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  return true;
  // synthesisController(
  //   synthesisText,
  //   synthesisDialect,
  //   synthesisGender,
  //   synthesisSpeed,
  //   synthesisPitch,
  //   synthesisMode,
  //   setSynthesisAudio,
  // );
};

export default getSynthesis;
