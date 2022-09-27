// import { useVoiceRecording } from '@/store/recognition';
import { useSynthesisText } from '@/store/synthesis';

import { TextFieldItem } from './types';

const CreateItem = () => {
  // const { recognitionText, setRecognitionText } = useRecognitionText();
  const { synthesisText, setSynthesisText } = useSynthesisText();
  // const { voiceRecording } = useVoiceRecording();

  const styles: { [name: string]: TextFieldItem } = {
    synthesis: {
      label: 'scríobh anseo',
      rows: 4,
      getter: synthesisText,
      setter: setSynthesisText,
      disabled: false,
      autoFocus: true,
    },
  };

  return styles;
};

export default CreateItem;
