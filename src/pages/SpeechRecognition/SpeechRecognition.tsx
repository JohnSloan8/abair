import { useEffect, useRef } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import { useRecoilValue } from 'recoil';

// import { CollectionsOutlined } from '@mui/icons-material';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import StopIcon from '@mui/icons-material/Stop';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { gsap } from 'gsap';
import Moment from 'moment';

import AbAudioPlayer from '@/components/AbAudioPlayer';
import AbIconButton from '@/components/AbIconButton';
import AbInfoHeader from '@/components/AbInfoHeader';
import AbTranscription from '@/components/AbTranscription';
import Loading from '@/components/Loading';
import Meta from '@/components/Meta';
import { CenteredFlexBox } from '@/components/styled';
import { recognitionTimeLimit } from '@/config';
import { transcriptionModel } from '@/models/transcription';
// import postAudio from '@/services/abair/recognition';
import { postCorrection } from '@/services/supabase/transcriptions';
import storeTranscription from '@/services/supabase/transcriptions/storeTranscription';
import { useSession } from '@/store/auth';
import {
  isRecognitionAudioEmpty,
  useAwaitingTranscription,
  useRecognitionAudio,
  useVoiceRecording,
} from '@/store/recognition';
import { useTranscriptions } from '@/store/transcriptions';
import { updateTranscriptions } from '@/store/transcriptions/utils';

import convertBlobToBase64 from './utils';

function SpeechRecognition() {
  console.log('in speech recognition');
  const recognitionProgressTimer = useRef(null);
  const tl = useRef();

  const { voiceRecording, setVoiceRecording } = useVoiceRecording();
  const { awaitingTranscription, setAwaitingTranscription } = useAwaitingTranscription();
  const { recognitionAudio, setRecognitionAudio } = useRecognitionAudio();

  useEffect(() => {
    tl.current && tl.current.progress(0).kill();
    tl.current = gsap.timeline().fromTo(
      recognitionProgressTimer.current,
      { width: '0%' },
      {
        width: '100%',
        ease: 'none',
        duration: recognitionTimeLimit,
        onComplete: () => {
          console.log('done');
          setVoiceRecording(false);
        },
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { status, startRecording, stopRecording } = useReactMediaRecorder({
    audio: true,
    video: false,
    onStop: async (blobUrl: string, blob: Blob) => {
      setAwaitingTranscription(true);
      setRecognitionAudio(blobUrl);
      const audioDataInBase64 = await convertBlobToBase64(blob);
      // console.log(audioDataInBase64);
      const username = session === null ? 'anon' : session.user.id;
      const filenamePrefix = Moment().format('YYYY-MM-DD-HH-mm-ss');
      // const filename = `${filenamePrefix}_${username}`;
      if (typeof audioDataInBase64 === 'string') {
        // postAudio(audioDataInBase64, filename);
        setTimeout(() => {
          setAwaitingTranscription(false);
          console.log('data returned');
          storeTranscription(username, 'cad é sin', filenamePrefix, 'model101');
        }, 2000);
      } else {
        alert('problem with audioDataInBase64');
      }
    },
  });
  const emptyAudio = useRecoilValue(isRecognitionAudioEmpty);
  const { session } = useSession();
  const { transcriptions, setTranscriptions } = useTranscriptions();

  useEffect(() => {
    console.log('in effect');
    if (voiceRecording) {
      console.log('playing');
      tl.current.play();
      startRecording();
    } else {
      console.log('pausing');
      tl.current.pause(0);
      stopRecording();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [voiceRecording]);

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
          height: { sm: '80px', xs: '60px' },
          bottom: 0,
          position: 'fixed',
          borderTop: 2,
          borderColor: voiceRecording
            ? 'warning.light'
            : awaitingTranscription
            ? 'primary.light'
            : 'secondary.light',
        }}
      >
        <Box
          ref={recognitionProgressTimer}
          sx={{
            position: 'absolute',
            bottom: 0,
            width: 0,
            height: '100%',
            backgroundColor: 'warning.wafer',
            left: '0',
          }}
        ></Box>
        <Box sx={{ maxWidth: 'sm' }}>
          <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
            {awaitingTranscription ? (
              <Box>
                <Loading />
              </Box>
            ) : !voiceRecording ? (
              <AbIconButton
                variation="record"
                handleClick={() => {
                  setVoiceRecording(true);
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
        </Box>
      </CenteredFlexBox>
    </>
  );
}
export default SpeechRecognition;
