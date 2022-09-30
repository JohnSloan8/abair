import { useEffect } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';

import postAudio from '@/services/abair/recognition';
import postTranscription from '@/services/supabase/transcriptions/postTranscription';
import { useSession, useSessionStart } from '@/store/auth';
import {
  useAwaitingTranscription,
  useRecognition,
  useRecognitionAudio,
  useVoiceRecording,
} from '@/store/recognition';
import { useTranscription } from '@/store/transcriptions';
import convertBlobToBase64 from '@/utils/convertBlobToBase64';

const AbRecognitionMediaCtrl = () => {
  const { sessionStart } = useSessionStart();
  const { voiceRecording } = useVoiceRecording();
  const { setAwaitingTranscription } = useAwaitingTranscription();
  const { transcription, setTranscription } = useTranscription();
  const { setRecognitionAudio } = useRecognitionAudio();
  const { recognition, setRecognition } = useRecognition();

  const { session } = useSession();

  const { startRecording, stopRecording } = useReactMediaRecorder({
    audio: true,
    video: false,
    onStop: async (blobUrl: string, blob: Blob) => {
      const userID = session === null ? null : session.user.id;
      setAwaitingTranscription(true);
      setRecognitionAudio(blobUrl);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      convertBlobToBase64(blob).then((result: any) => {
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        postAudio(result.slice(22)).then((data: any) => {
          setRecognition({
            user: userID,
            session_start: sessionStart,
            audio_file_path: data.audioFilePath,
            duration: parseFloat(data.duration),
            recognition_response: data.transcriptions,
          });
        });
      });
    },
  });

  useEffect(() => {
    recognition !== undefined ? postTranscription(recognition, setTranscription) : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recognition]);

  useEffect(() => {
    if (voiceRecording) {
      startRecording();
      console.log('starting recording');
    } else {
      console.log('stopping recording');
      stopRecording();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [voiceRecording]);

  useEffect(() => {
    setAwaitingTranscription(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcription]);

  return null;
};

export default AbRecognitionMediaCtrl;
