import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import StopIcon from '@mui/icons-material/Stop';

import { AbIconButton } from 'abair-components';
import { AbLoading } from 'abair-components/';

import Media from '@/display/controllers/Media';
import { useConsent, useShowConsent } from '@/store/consent';
import {
  useAwaitingTranscription,
  useMediaRecorderExists,
  useVoiceRecording,
} from '@/store/recognition';
import { CenteredFlexBox } from '@/utils/flex';

const RecognitionRecordStopButtons = () => {
  const { voiceRecording, setVoiceRecording } = useVoiceRecording();
  const { awaitingTranscription } = useAwaitingTranscription();
  const { mediaRecorderExists } = useMediaRecorderExists();
  const { consent } = useConsent();
  const { setShowConsent } = useShowConsent();

  const handleClick = () => {
    if (mediaRecorderExists) {
      if (consent) {
        setVoiceRecording(true);
      } else {
        setShowConsent(true);
      }
    } else {
      alert(
        'To use this feature, you must give permission for this site to use your microphone, and then refresh.',
      );
    }
  };

  return (
    <CenteredFlexBox sx={{ position: 'relative' }}>
      {awaitingTranscription ? (
        <AbLoading />
      ) : !voiceRecording ? (
        <AbIconButton color="warning" onClick={handleClick} icon={KeyboardVoiceIcon} />
      ) : (
        <AbIconButton
          color="warning"
          onClick={() => {
            setVoiceRecording(false);
          }}
          icon={StopIcon}
        />
      )}
      <Media />
    </CenteredFlexBox>
  );
};

export default RecognitionRecordStopButtons;
