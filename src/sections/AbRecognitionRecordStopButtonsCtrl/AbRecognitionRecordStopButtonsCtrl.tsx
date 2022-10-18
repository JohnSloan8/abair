import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import StopIcon from '@mui/icons-material/Stop';

import AbIconButton from '@/components/AbIconButton';
import Loading from '@/components/Loading';
import { CenteredFlexBox } from '@/components/styled';
import AbMediaCtrl from '@/sections/AbMediaCtrl';
import {
  useAwaitingTranscription,
  useMediaRecorderExists,
  useVoiceRecording,
} from '@/store/recognition';

const AbRecognitionRecordStopButtonsCtrl = () => {
  const { voiceRecording, setVoiceRecording } = useVoiceRecording();
  const { awaitingTranscription } = useAwaitingTranscription();
  const { mediaRecorderExists } = useMediaRecorderExists();

  const handleClick = () => {
    if (mediaRecorderExists) {
      setVoiceRecording(true);
    } else {
      alert('you must log in or give permission for this site to use your microphone.');
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
      <AbMediaCtrl />
    </CenteredFlexBox>
  );
};

export default AbRecognitionRecordStopButtonsCtrl;
