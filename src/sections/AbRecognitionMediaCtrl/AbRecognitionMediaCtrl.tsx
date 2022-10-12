/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';

import postAudio from '@/services/abair/recognition';
import postTranscription from '@/services/supabase/transcriptions/postTranscription';
import { useSession, useSessionID } from '@/store/auth';
import {
  useAwaitingTranscription,
  useRecognitionAudio,
  useVoiceRecording,
} from '@/store/recognition';
import { useEditableTranscriptionText, useTranscription } from '@/store/transcriptions';
import convertBlobToBase64 from '@/utils/convertBlobToBase64';

const AbRecognitionMediaCtrl = () => {
  const { sessionID } = useSessionID();
  const { voiceRecording } = useVoiceRecording();
  const { setAwaitingTranscription } = useAwaitingTranscription();
  const { setTranscription } = useTranscription();
  const { setRecognitionAudio } = useRecognitionAudio();

  const { setEditableTranscriptionText } = useEditableTranscriptionText();

  const { session } = useSession();

  const { startRecording, stopRecording } = useReactMediaRecorder({
    audio: true,
    video: false,
    onStop: async (blobUrl: string, blob: Blob) => {
      setAwaitingTranscription(true);
      setRecognitionAudio(blobUrl);
      console.log('blob:', blob);

      convertBlobToBase64(blob).then((result: any) => {
        postAudio(result.slice(22)).then((data: any) => {
          postTranscription({
            user_id: session === null ? null : session.user.id,
            session_ID: sessionID,
            audio_file_path: data.audioFilePath.slice(5, data.audioFilePath.length - 4), // trim the /tmp and .wav
            duration: parseFloat(data.duration),
            recognition_response: data.transcriptions,
          }).then((data: any) => {
            setTranscription({
              id: data.id,
              user_id: data.user,
              session_ID: data.session_ID,
              audio_file_path: data.audio_file_path,
              duration: data.duration,
              recognition_response: data.recognition_response,
              correct: data.correct,
              correction: data.correction,
              corrected: data.corrected,
            });
          });
        });
      });
    },
  });

  const resetRecognitionTranscriptionStates = () => {
    setRecognitionAudio('');
    setEditableTranscriptionText('');
    setTranscription(undefined);
  };

  useEffect(() => {
    if (voiceRecording) {
      resetRecognitionTranscriptionStates();
      startRecording();
      console.log('starting recording');
    } else {
      console.log('stopping recording');
      stopRecording();
    }
  }, [voiceRecording]);

  return null;
};

export default AbRecognitionMediaCtrl;
