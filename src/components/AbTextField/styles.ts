import { useRecognitionText, useRecording } from '@/store/recognition';
import { useSynthesisText } from '@/store/synthesis';

import { TextFieldItem } from './types';

const CreateItem = () => {
  const { recognitionText, setRecognitionText } = useRecognitionText();
  const { synthesisText, setSynthesisText } = useSynthesisText();
  const { recording } = useRecording();

  const styles: { [name: string]: TextFieldItem } = {
    synthesis: {
      label: 'scríobh anseo',
      rows: 4,
      getter: synthesisText,
      setter: setSynthesisText,
      disabled: false,
      autoFocus: true,
    },
    recognition: {
      label: recording ? 'tap the stop button to end recording' : 'tap the microphone and speak',
      rows: 6,
      getter: recognitionText,
      setter: setRecognitionText,
      disabled: true,
      autoFocus: false,
    },
  };

  return styles;
};

export default CreateItem;
