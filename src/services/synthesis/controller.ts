import { SetterOrUpdater } from 'recoil';

import axios from 'axios';

import { synthesisURL } from '@/config';

import {
  dialectType,
  genderType,
  getVoice,
  modeType,
  pitchNum,
  pitchType,
  speedNum,
  speedType,
} from './types';

const SynthesisController = (
  text: string,
  dialect: dialectType,
  gender: genderType,
  speed: speedType,
  pitch: pitchType,
  mode: modeType,
  setter: SetterOrUpdater<string>,
) => {
  axios({
    method: 'post',
    url: synthesisURL,
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      input: text,
      voice: getVoice(gender, dialect) + '.nemo',
      speaker: null,
      outputType: 'JSON',
      audioEncoding: 'wav',
      cutSilence: false,
      speed: speedNum[speed],
      ps: null,
      pa: pitchNum[pitch],
    },
  })
    .then(function (response) {
      setter('data:audio/wav;base64,' + response.data.audioContent);
    })
    .catch(function (error) {
      alert('error:' + error);
      return 'problem';
    })
    .then(function () {
      console.log('synthesis complete');
    });
};

export default SynthesisController;
