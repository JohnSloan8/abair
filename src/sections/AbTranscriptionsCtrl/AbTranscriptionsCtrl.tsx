/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import getAudio from '@/services/abair/recognition/getAudio';
import { getTranscriptions } from '@/services/supabase/transcriptions';
import getThisSessionTranscriptions from '@/services/supabase/transcriptions/getThisSessionTranscriptions';
import { useSession, useSessionID } from '@/store/auth';
import { useAwaitingTranscription, useRecognitionAudio } from '@/store/recognition';
import {
  useEditableTranscriptionText,
  useTranscription,
  useTranscriptions,
} from '@/store/transcriptions';

const AbTranscriptionsCtrl = () => {
  const { session } = useSession();
  const { setTranscriptions } = useTranscriptions();
  const { sessionID } = useSessionID();
  const { transcription } = useTranscription();
  const { setAwaitingTranscription } = useAwaitingTranscription();
  const { setEditableTranscriptionText } = useEditableTranscriptionText();
  const { setRecognitionAudio } = useRecognitionAudio();

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
        const transcriptionChunks = transcription.recognition_response[0].utterance.split('\n');
        console.log('transcriptionChuks:', transcriptionChunks);
        const nonEmptyTc = transcriptionChunks.filter((tC) => tC !== '');
        setEditableTranscriptionText(nonEmptyTc[nonEmptyTc.length - 1]);
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

export default AbTranscriptionsCtrl;
