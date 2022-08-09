interface synthesisProps {
  text: string;
  dialect: string;
  gender: 'male' | 'female';
  speed: 'slow' | 'normal' | 'fast' | 'very fast';
  pitch: 'very low' | 'low' | 'normal' | 'high' | 'very high';
  mode: 'DNN' | 'HTS';
  requestOrigin: 'main' | 'an scéalaí';
}

export default synthesisProps;
