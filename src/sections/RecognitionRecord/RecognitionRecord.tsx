import { useEffect } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import { SetterOrUpdater } from 'recoil';

import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import StopIcon from '@mui/icons-material/Stop';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import AbIconButton from '@/components/AbIconButton';
import AbProgressBar from '@/components/AbProgressBar';
import AbTranscription from '@/components/AbTranscription';
import Loading from '@/components/Loading';
import { recognitionTimeLimit } from '@/config';
// import { transcriptionModel } from '@/models/transcription';
import postAudio from '@/services/abair/recognition';
// import { postCorrection } from '@/services/supabase/transcriptions';
import postTranscription from '@/services/supabase/transcriptions/postTranscription';
import { useSession, useSessionStart } from '@/store/auth';
import { useAwaitingTranscription, useRecognition, useVoiceRecording } from '@/store/recognition';
import { useTranscription } from '@/store/transcriptions';

import convertBlobToBase64 from './utils';

interface RecognitionRecordProps {
  setter: SetterOrUpdater<string>;
}

const RecognitionRecord = ({ setter }: RecognitionRecordProps) => {
  const { sessionStart } = useSessionStart();
  const { voiceRecording, setVoiceRecording } = useVoiceRecording();
  const { awaitingTranscription, setAwaitingTranscription } = useAwaitingTranscription();
  const { transcription, setTranscription } = useTranscription();
  // const { recognitionAudio, setRecognitionAudio } = useRecognitionAudio();
  const { recognition, setRecognition } = useRecognition();
  // const emptyAudio = useRecoilValue(isRecognitionAudioEmpty);
  const { session } = useSession();

  const { startRecording, stopRecording } = useReactMediaRecorder({
    audio: true,
    video: false,
    onStop: async (blobUrl: string, blob: Blob) => {
      setAwaitingTranscription(true);
      setter(blobUrl);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      convertBlobToBase64(blob).then((result: any) => {
        console.log('result:', result);
        const userID = session === null ? null : session.user.id;
        postAudio(result.slice(22), userID, sessionStart, setRecognition);

        // postTranscription(userID, 'cad é sin', filenamePrefix, 'model101', sessionStart);
      });
    },
  });

  useEffect(() => {
    recognition !== undefined ? postTranscription(recognition, setTranscription) : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recognition]);

  useEffect(() => {
    if (voiceRecording) {
      console.log('recording');
      startRecording();
    } else {
      console.log('stopping record');
      stopRecording();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [voiceRecording]);

  const handleCorrection = (
    correct: boolean | null,
    correction: string | null | undefined,
    corrected: boolean,
  ) => {
    setTranscription({
      ...transcription,
      correct: correct,
      correction: correction,
      corrected: corrected,
    });
    // postCorrection(transcription).then((res) => {
    //   res
    //     ? updateTranscriptions(
    //         transcription.id,
    //         correct,
    //         correction,
    //         corrected,
    //         transcriptions,
    //         setTranscriptions,
    //       )
    //     : alert('postCorrection failed');
    // });
    console.log('handling correction');
  };

  useEffect(() => {
    console.log('transcription:', transcription);
    setAwaitingTranscription(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcription]);

  return (
    <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
      <AbTranscription
        t={transcription}
        handleCorrection={handleCorrection}
        transcriptionBoxHeight={150}
      ></AbTranscription>
      <AbProgressBar
        running={voiceRecording}
        color="warning"
        timeLimit={recognitionTimeLimit}
        handleComplete={() => {
          console.log('completed');
        }}
      />

      <Grid container direction="row" justifyContent="space-evenly" alignItems="center" height={70}>
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
  );
};

export default RecognitionRecord;
