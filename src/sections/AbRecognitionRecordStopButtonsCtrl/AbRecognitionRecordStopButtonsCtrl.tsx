import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import StopIcon from '@mui/icons-material/Stop';

import AbIconButton from '@/components/AbIconButton';
import Loading from '@/components/Loading';
import { CenteredFlexBox } from '@/components/styled';
import {
  useAwaitingTranscription,
  useMediaRecorderReady,
  useVoiceRecording,
} from '@/store/recognition';

const AbRecognitionRecordStopButtonsCtrl = () => {
  const { voiceRecording, setVoiceRecording } = useVoiceRecording();
  const { awaitingTranscription } = useAwaitingTranscription();
  const { mediaRecorderReady } = useMediaRecorderReady();

  const handleClick = () => {
    if (mediaRecorderReady) {
      setVoiceRecording(true);
    } else {
      alert('you need to allow permission for the microphone on this website and refresh');
    }
  };

  return (
    <CenteredFlexBox sx={{ position: 'relative' }}>
      {awaitingTranscription ? (
        <Loading />
      ) : !voiceRecording ? (
        <AbIconButton variation="stop" handleClick={handleClick} icon={KeyboardVoiceIcon} />
      ) : (
        <AbIconButton
          variation="stop"
          handleClick={() => {
            setVoiceRecording(false);
          }}
          icon={StopIcon}
        />
      )}
    </CenteredFlexBox>
  );
};

export default AbRecognitionRecordStopButtonsCtrl;
