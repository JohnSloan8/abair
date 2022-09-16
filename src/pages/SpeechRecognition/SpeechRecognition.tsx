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
import AbTranscription from '@/components/AbTranscription';
import Meta from '@/components/Meta';
import { CenteredFlexBox } from '@/components/styled';
import { transcriptionModel } from '@/models/transcription';
// import postAudioData from '@/services/abair/recognition';
import { postCorrection } from '@/services/supabase/transcriptions';
import getTranscriptions from '@/services/supabase/transcriptions/getTranscriptions';
import { useSession } from '@/store/auth';
import { isRecognitionAudioEmpty, useRecognitionAudio, useRecording } from '@/store/recognition';
import { useTranscriptions } from '@/store/transcriptions';
import { updateTranscriptions } from '@/store/transcriptions/utils';

// import convertBlobToBase64 from './utils';

function SpeechRecognition() {
  const { recording, setRecording } = useRecording();
  const { recognitionAudio, setRecognitionAudio } = useRecognitionAudio();
  // const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({
  const { status, startRecording, stopRecording } = useReactMediaRecorder({
    audio: true,
    video: false,
    // onStop: async (blobUrl: string, blob: Blob) => {
    onStop: async (blobUrl: string) => {
      console.log('blobUrl:', blobUrl);
      setRecognitionAudio(blobUrl);
      // const audioDataInBase64 = await convertBlobToBase64(blob);
      // console.log(audioDataInBase64);
      // const username = session === null ? 'anon' : session.user.id;
      // const filenamePrefix = Moment().format('YYYY-MM-DD-HH-mm-ss');
      // const filename = `${filenamePrefix}_${username}`;
      // postAudioData(audioDataInBase64, filename);
    },
  });
  const emptyAudio = useRecoilValue(isRecognitionAudioEmpty);
  const { session } = useSession();

  const { transcriptions, setTranscriptions } = useTranscriptions();

  const toggleRecording = () => {
    recording ? stopRecording() : startRecording();
    setRecording((recording: boolean) => !recording);
  };

  useEffect(() => {
    const userID = session ? session.user.id : 'anonymous';
    getTranscriptions(userID).then((res) => {
      setTranscriptions(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCorrection = (
    transcription: transcriptionModel,
    correct: boolean | null,
    correction: string | null,
    corrected: boolean,
  ) => {
    postCorrection(transcription, correct, correction, corrected).then((res) => {
      res
        ? updateTranscriptions(
            transcription.id,
            correct,
            correction,
            corrected,
            transcriptions,
            setTranscriptions,
          )
        : alert('postCorrection failed');
    });
  };

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
            <AbTranscription transcription={t} key={i} handleCorrection={handleCorrection}>
              <p>audio test</p>
            </AbTranscription>
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
