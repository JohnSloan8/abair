/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import getAudio from '@/services/abair/recognition/getAudio';
import { getTranscriptions } from '@/services/supabase/transcriptions';
import getThisSessionTranscriptions from '@/services/supabase/transcriptions/getThisSessionTranscriptions';
import { useSession, useSessionID } from '@/store/auth';
import { useAwaitingTranscription, useRecognitionAudio } from '@/store/recognition';
import {
  transcriptionText,
  useEditableTranscriptionText,
  useTranscription,
  useTranscriptions,
} from '@/store/transcriptions';

const Transcriptions = () => {
  const { session } = useSession();
  const { setTranscriptions } = useTranscriptions();
  const { sessionID } = useSessionID();
  const { transcription } = useTranscription();
  const { setAwaitingTranscription } = useAwaitingTranscription();
  const { setEditableTranscriptionText } = useEditableTranscriptionText();
  const { setRecognitionAudio } = useRecognitionAudio();
  const transcriptionTextValue = useRecoilValue(transcriptionText);

  useEffect(() => {
    updateTranscriptions();
  }, []);

  useEffect(() => {
    updateTranscriptions();
    setAwaitingTranscription(false);
    if (transcription !== undefined) {
      getAudio(transcription.audio_file_path).then((res: any) => {
        setRecognitionAudio(`data:audio/wav;base64,${res.audio}`);
      });
      if (!transcription.corrected) {
        setEditableTranscriptionText(transcriptionTextValue);
      } else {
        setEditableTranscriptionText(transcription.correction);
      }
    }
  }, [transcription]);

  const updateTranscriptions = () => {
    if (session) {
      getTranscriptions(session.user.id).then((res: any) => {
        console.log('getTranscriptions:', res);
        setTranscriptions(res);
      });
    } else {
      getThisSessionTranscriptions(sessionID).then((res: any) => {
        console.log('getThisSessionTranscriptions:', res);
        setTranscriptions(res);
      });
    }
  };

  return null;
};

export default Transcriptions;
