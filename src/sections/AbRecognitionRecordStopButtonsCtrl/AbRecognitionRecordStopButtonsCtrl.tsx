import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import StopIcon from '@mui/icons-material/Stop';

import AbIconButton from '@/components/AbIconButton';
import Loading from '@/components/Loading';
import { CenteredFlexBox } from '@/components/styled';
import AbMediaCtrl from '@/sections/AbMediaCtrl';
import { useAwaitingTranscription, useVoiceRecording } from '@/store/recognition';

const AbRecognitionRecordStopButtonsCtrl = () => {
  const { voiceRecording, setVoiceRecording } = useVoiceRecording();
  const { awaitingTranscription } = useAwaitingTranscription();

  const handleClick = () => {
    setVoiceRecording(true);
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
