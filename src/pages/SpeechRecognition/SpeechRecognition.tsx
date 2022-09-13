import { useEffect } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import { useRecoilValue } from 'recoil';

import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import StopIcon from '@mui/icons-material/Stop';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// import Moment from 'moment';
import AbAudioPlayer from '@/components/AbAudioPlayer';
import AbIconButton from '@/components/AbIconButton';
import AbInfoHeader from '@/components/AbInfoHeader';
import AbTranscriptionContainer from '@/components/AbTranscriptionContainer';
import Meta from '@/components/Meta';
import { CenteredFlexBox } from '@/components/styled';
// import { postCorrectnessJudgement } from '@/services/supabase/transcriptions';
import getCorrections from '@/services/supabase/transcriptions/getCorrections';
// import postAudioBlob from '@/services/abair/recognition';
import getTranscriptions from '@/services/supabase/transcriptions/getTranscriptions';
import { useSession } from '@/store/auth';
import { isRecognitionAudioEmpty, useRecognitionAudio, useRecording } from '@/store/recognition';
import { useCorrections, useTranscriptions } from '@/store/transcriptions';

function SpeechRecognition() {
  const { recording, setRecording } = useRecording();
  const { recognitionAudio, setRecognitionAudio } = useRecognitionAudio();
  const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({
    audio: true,
    video: false,
  });
  const emptyAudio = useRecoilValue(isRecognitionAudioEmpty);
  const { session } = useSession();
  // const [transcriptionsLoading, setTranscriptionsLoading] = useState(true)
  const { transcriptions, setTranscriptions } = useTranscriptions();
  const { setCorrections } = useCorrections();

  const toggleRecording = () => {
    recording ? prepareToPostAudioBlob() : startRecording();
    setRecording((recording: boolean) => !recording);
  };

  const prepareToPostAudioBlob = () => {
    stopRecording();
    setRecognitionAudio(mediaBlobUrl);
    // const username = session === null ? 'anon' : session.user.id;
    // const filenamePrefix = Moment().format('YYYY-MM-DD-HH-mm-ss');
    // const filename = `${filenamePrefix}_${username}`;
    // const ts = postAudioBlob(mediaBlobUrl, filename);
  };

  useEffect(() => {
    const userID = session ? session.user.id : 'anonymous';
    getTranscriptions(userID).then((res) => {
      console.log('transcriptions:', res);
      setTranscriptions(res);
    });
    getCorrections(userID).then((res) => {
      console.log('corrections:', res);
      setCorrections(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log('transcriptionsUpdated:', transcriptions);
  }, [transcriptions]);

  return (
    <>
      <CenteredFlexBox>
        <Box sx={{ width: '100%', maxWidth: 'sm' }}>
          <Meta title="speech recognition" />
          <AbInfoHeader title="Speech Recognition" />
          <Typography variant="body1" align="center">
            {status}
          </Typography>
          <CenteredFlexBox pt={4}></CenteredFlexBox>
          {!emptyAudio && (
            <CenteredFlexBox>
              <AbAudioPlayer audioURL={recognitionAudio} />
            </CenteredFlexBox>
          )}
          {transcriptions.map((t, i) => (
            <AbTranscriptionContainer transcription={t} key={i} />
          ))}
        </Box>
      </CenteredFlexBox>

      <CenteredFlexBox
        sx={{
          width: '100%',
          bottom: 0,
          position: 'fixed',
          borderTop: 1,
          borderColor: 'secondary.light',
        }}
      >
        <Box sx={{ maxWidth: 'sm' }}>
          <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
            {!recording ? (
              <AbIconButton
                variation="record"
                handleClick={toggleRecording}
                icon={KeyboardVoiceIcon}
              />
            ) : (
              <AbIconButton variation="stop" handleClick={toggleRecording} icon={StopIcon} />
            )}
          </Grid>
        </Box>
      </CenteredFlexBox>
    </>
  );
}

export default SpeechRecognition;
