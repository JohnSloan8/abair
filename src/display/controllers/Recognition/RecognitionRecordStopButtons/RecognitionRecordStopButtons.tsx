import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import StopIcon from '@mui/icons-material/Stop';

import { AbIconButton } from 'abair-components';
import { AbLoading } from 'abair-components/';

import Media from '@/display/controllers/Media';
import { CenteredFlexBox } from '@/display/utils/flex';
import {
  useAwaitingTranscription,
  useMediaRecorderExists,
  useVoiceRecording,
} from '@/store/recognition';
import { useShowTempConsent, useTempConsent } from '@/store/tempConsent';

const RecognitionRecordStopButtons = () => {
  const { voiceRecording, setVoiceRecording } = useVoiceRecording();
  const { awaitingTranscription } = useAwaitingTranscription();
  const { mediaRecorderExists } = useMediaRecorderExists();
  const { tempConsent } = useTempConsent();
  const { setShowTempConsent } = useShowTempConsent();

  const handleClick = () => {
    if (mediaRecorderExists) {
      if (tempConsent) {
        setVoiceRecording(true);
      } else {
        setShowTempConsent(true);
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
