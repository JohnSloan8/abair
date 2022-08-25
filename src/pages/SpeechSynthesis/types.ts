import { SetterOrUpdater } from 'recoil';

// interface requestDataObject {
//   input: string;
//   voice: string;
//   speaker: string;
//   outputType: string;
//   audioEncoding: string;
//   cutSilence: boolean;
//   speed: number;
//   ps: string;
//   pa: number;
// }

type dialectType = 'Ulster' | 'Connaught' | 'Munster';
type genderType = 'male' | 'female';
type speedType = 'very slow' | 'slow' | 'normal' | 'fast' | 'very fast';
type pitchType = 'very low' | 'low' | 'normal' | 'high' | 'very high';
type modeType = 'DNN' | 'HTS';
type voiceType = 'anb' | 'pmg' | 'snc' | 'cmg' | 'nnc';

interface synthesisProps {
  text: string;
  dialect: dialectType;
  gender: genderType;
  speed: speedType;
  pitch: pitchType;
  mode: modeType;
  setter: SetterOrUpdater<string>;
}

const speedNum = {
  'very slow': 0.5,
  slow: 0.75,
  normal: 1,
  fast: 1.25,
  'very fast': 1.5,
};

const pitchNum = {
  'very low': 0,
  low: 0.5,
  normal: 1,
  high: 2,
  'very high': 3,
};

const getVoice = (gender: genderType, dialect: dialectType): voiceType => {
  let voice: voiceType = 'pmg';
  if (gender === 'female') {
    if (dialect === 'Ulster') {
      voice = 'anb';
    } else if (dialect === 'Connaught') {
      voice = 'snc';
    } else if (dialect === 'Munster') {
      voice = 'nnc';
    }
  }
  return voice;
};

interface AbRadioGroupModel {
  name: string;
  getter: string;
  setter: SetterOrUpdater<string>;
  options: string[];
}

interface AbAccordionModel {
  title: string;
  getter: boolean;
  setter: SetterOrUpdater<boolean>;
  items: AbRadioGroupModel[];
}

export type { AbAccordionModel, AbRadioGroupModel };

export default synthesisProps;
export { getVoice, speedNum, pitchNum };
export type { dialectType, genderType, speedType, pitchType, modeType };
