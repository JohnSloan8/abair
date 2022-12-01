import { AbProgressBar } from 'abair-components';

import { recognitionTimeLimit } from '@/config';
import { useVoiceRecording } from '@/store/recognition';

const AbRecognitionProgressBarCtrl = () => {
  const { voiceRecording, setVoiceRecording } = useVoiceRecording();

  return (
    <AbProgressBar
      width="100%"
      height="100%"
      borderWidth={0}
      running={voiceRecording}
      color="warning.main"
      timeLimit={recognitionTimeLimit}
      handleComplete={() => {
        setVoiceRecording(false);
      }}
    />
  );
};

export default AbRecognitionProgressBarCtrl;
