/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';

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

import initMediaRecorder from './utils';

const AbMediaCtrl = () => {
  const [mediaRecorder, setMediaRecorder] = useState<any>();
  const { sessionID } = useSessionID();
  const { voiceRecording } = useVoiceRecording();
  const { setAwaitingTranscription } = useAwaitingTranscription();
  const { setTranscription } = useTranscription();
  const { setRecognitionAudio } = useRecognitionAudio();

  const { setEditableTranscriptionText } = useEditableTranscriptionText();

  const { session } = useSession();

  const resetRecognitionTranscriptionStates = () => {
    setRecognitionAudio('');
    setEditableTranscriptionText('');
    setTranscription(undefined);
  };

  useEffect(() => {
    if (mediaRecorder !== undefined) {
      if (voiceRecording) {
        resetRecognitionTranscriptionStates();
        mediaRecorder.start();
        console.log('starting recording');
      } else {
        console.log('stopping recording');
        mediaRecorder.stop();
      }
    }
  }, [voiceRecording]);

  useEffect(() => {
    initMediaRecorder().then((res) => {
      console.log('res:', res);
      setMediaRecorder(res);
    });
  }, []);

  let chunks: any[] = [];
  useEffect(() => {
    console.log('mediaRecorder:', mediaRecorder);
    if (mediaRecorder !== undefined) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      mediaRecorder.onstop = (e: any) => {
        console.log('data available after MediaRecorder.stop() called.');
        const blob = new Blob(chunks, { type: 'audio/wav;' });
        chunks = [];
        const audioURL = window.URL.createObjectURL(blob);
        setRecognitionAudio(audioURL);

        setAwaitingTranscription(true);
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
      };

      mediaRecorder.ondataavailable = (e: any) => {
        chunks.push(e.data);
      };
    }
  }, [mediaRecorder]);

  return null;
};

export default AbMediaCtrl;
