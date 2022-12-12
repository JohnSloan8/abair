interface synthesisVoiceModel {
  name: string;
  gender: string;
  locale: string;
  mode?: string;
  shortCode: string;
  voices: string[];
  pitchRange: number[];
  speedRange: number[];
  pitch: number;
  speed: number;
}

export default synthesisVoiceModel;
