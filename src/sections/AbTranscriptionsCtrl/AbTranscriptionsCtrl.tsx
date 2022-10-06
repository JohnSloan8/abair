import { useEffect } from 'react';

import { getTranscriptions } from '@/services/supabase/transcriptions';
import getThisSessionTranscriptions from '@/services/supabase/transcriptions/getThisSessionTranscriptions';
import { useSession, useSessionStart } from '@/store/auth';
import { useAwaitingTranscription } from '@/store/recognition';
import {
  useEditableTranscriptionText,
  useTranscription,
  useTranscriptions,
} from '@/store/transcriptions';

const AbTranscriptionsCtrl = () => {
  const { session } = useSession();
  const { setTranscriptions } = useTranscriptions();
  const { sessionStart } = useSessionStart();
  const { transcription } = useTranscription();
  const { setAwaitingTranscription } = useAwaitingTranscription();
  const { setEditableTranscriptionText } = useEditableTranscriptionText();

  useEffect(() => {
    updateTranscriptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log('in transcription:', transcription);
    updateTranscriptions();
    setAwaitingTranscription(false);
    transcription !== undefined && !transcription.corrected
      ? setEditableTranscriptionText(transcription.recognition_response[0].utterance)
      : null;
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
      getThisSessionTranscriptions(sessionStart).then((res: any) => {
        console.log('getThisSessionTranscriptions:', res);
        setTranscriptions(res);
      });
    }
  };

  return null;
};

export default AbTranscriptionsCtrl;
