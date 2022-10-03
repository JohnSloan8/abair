import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import StopIcon from '@mui/icons-material/Stop';
import Grid from '@mui/material/Grid';

import AbIconButton from '@/components/AbIconButton';
import AbProgressBar from '@/components/AbProgressBar';
import Loading from '@/components/Loading';
import { CenteredFlexBox } from '@/components/styled';
import { recognitionTimeLimit } from '@/config';
import { useAwaitingTranscription, useVoiceRecording } from '@/store/recognition';

const AbSynthesisButtonsCtrl = () => {
  const { voiceRecording, setVoiceRecording } = useVoiceRecording();
  const { awaitingTranscription } = useAwaitingTranscription();

  return (
    <CenteredFlexBox sx={{ width: '100%', height: '100%', position: 'relative' }}>
      <AbProgressBar
        running={voiceRecording}
        color="warning.main"
        timeLimit={recognitionTimeLimit}
        handleComplete={() => {
          setVoiceRecording(false);
        }}
      />

      <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
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
      </Grid>
    </CenteredFlexBox>
  );
};

export default AbSynthesisButtonsCtrl;
