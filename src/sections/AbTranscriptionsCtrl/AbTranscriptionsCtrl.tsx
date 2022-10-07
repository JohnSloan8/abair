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
  const { transcriptions, setTranscriptions } = useTranscriptions();
  const { sessionID } = useSessionID();
  const { transcription } = useTranscription();
  const { setAwaitingTranscription } = useAwaitingTranscription();
  const { setEditableTranscriptionText } = useEditableTranscriptionText();
  const { setRecognitionAudio } = useRecognitionAudio();

  useEffect(() => {
    updateTranscriptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log('transcriptions:', transcriptions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcriptions]);

  useEffect(() => {
    console.log('in transcription:', transcription);
    updateTranscriptions();
    setAwaitingTranscription(false);
    if (transcription !== undefined) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      getAudio(transcription.audio_file_path).then((res: any) => {
        setRecognitionAudio(`data:audio/wav;base64,${res.audio}`);
      });
      if (!transcription.corrected) {
        setEditableTranscriptionText(transcription.recognition_response[0].utterance);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcription]);

  const updateTranscriptions = () => {
    if (session) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      getTranscriptions(session.user.id).then((res: any) => {
        console.log('getTranscriptions:', res);
        setTranscriptions(res);
      });
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      getThisSessionTranscriptions(sessionID).then((res: any) => {
        console.log('getThisSessionTranscriptions:', res);
        setTranscriptions(res);
      });
    }
  };

  return null;
};

export default AbTranscriptionsCtrl;
