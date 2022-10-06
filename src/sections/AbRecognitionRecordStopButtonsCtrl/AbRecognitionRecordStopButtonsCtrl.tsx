import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import StopIcon from '@mui/icons-material/Stop';

import AbIconButton from '@/components/AbIconButton';
import Loading from '@/components/Loading';
import { CenteredFlexBox } from '@/components/styled';
import { useAwaitingTranscription, useVoiceRecording } from '@/store/recognition';

const AbRecognitionRecordStopButtonsCtrl = () => {
  const { voiceRecording, setVoiceRecording } = useVoiceRecording();
  const { awaitingTranscription } = useAwaitingTranscription();

  return (
    <CenteredFlexBox sx={{ position: 'relative' }}>
      {awaitingTranscription ? (
        <Loading />
      ) : !voiceRecording ? (
        <AbIconButton
          variation="stop"
          handleClick={() => {
            setVoiceRecording(true);
            console.log('recording click');
          }}
          icon={KeyboardVoiceIcon}
        />
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
