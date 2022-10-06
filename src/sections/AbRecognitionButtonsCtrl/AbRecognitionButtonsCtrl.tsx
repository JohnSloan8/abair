import Grid from '@mui/material/Grid';

import AbProgressBar from '@/components/AbProgressBar';
import { CenteredFlexBox } from '@/components/styled';
import { recognitionTimeLimit } from '@/config';
import AbRecognitionAudioPlayerCtrl from '@/sections/AbRecognitionAudioPlayerCtrl';
import AbRecognitionCorrectionCtrl from '@/sections/AbRecognitionCorrectionCtrl';
import AbRecognitionRecordStopButtonsCtrl from '@/sections/AbRecognitionRecordStopButtonsCtrl';
import { useVoiceRecording } from '@/store/recognition';

const AbRecognitionButtonsCtrl = () => {
  const { voiceRecording, setVoiceRecording } = useVoiceRecording();

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

      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={4}>
          <CenteredFlexBox>
            <AbRecognitionCorrectionCtrl />
          </CenteredFlexBox>
        </Grid>
        <Grid item xs={4}>
          <AbRecognitionRecordStopButtonsCtrl />
        </Grid>
        <Grid item xs={4}>
          <CenteredFlexBox>
            <AbRecognitionAudioPlayerCtrl />
          </CenteredFlexBox>
        </Grid>
      </Grid>
    </CenteredFlexBox>
  );
};

export default AbRecognitionButtonsCtrl;
