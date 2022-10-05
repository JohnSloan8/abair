import { useEffect } from 'react';

import Box from '@mui/material/Box';

import AbInfoHeader from '@/components/AbInfoHeader';
import AbRecognitionHistoryListItem from '@/components/AbRecognitionHistoryListItem';
import Meta from '@/components/Meta';
import { CenteredFlexBox, FullSizeBox } from '@/components/styled';
import { transcriptionModel } from '@/models/transcription';
import AbAlertCtrl from '@/sections/AbAlertCtrl';
import AbRecognitionCtrl from '@/sections/AbRecognitionCtrl';
import AbRecognitionHistoryButtonsCtrl from '@/sections/AbRecognitionHistoryButtonsCtrl';
import AbRecognitionMediaCtrl from '@/sections/AbRecognitionMediaCtrl';
import { getTranscriptions } from '@/services/supabase/transcriptions';
import { useAlert } from '@/store/alert';
import { useSession } from '@/store/auth';
import { useTranscriptions } from '@/store/transcriptions';

function SpeechRecognition() {
  const { session } = useSession();
  const { setAlert } = useAlert();
  const { transcriptions, setTranscriptions } = useTranscriptions();

  useEffect(() => {
    if (session) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      getTranscriptions(session.user.id).then((res: any) => {
        console.log('res:', res);
        setTranscriptions(res);
      });
    } else {
      setAlert(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (id: number | undefined) => {
    console.log('clicked:', id);
  };

  return (
    <FullSizeBox sx={{ backgroundColor: 'warning.wafer' }}>
      {session === null && (
        <AbAlertCtrl description="you must login to use this feature" goTo="/login" />
      )}
      <CenteredFlexBox>
        <Box sx={{ width: '100%', maxWidth: 'sm' }}>
          <Meta title="speech recognition" />
          <AbInfoHeader title="Speech Recognition" />

          <CenteredFlexBox mb={4}>
            <AbRecognitionCtrl>
              <AbRecognitionHistoryButtonsCtrl />
            </AbRecognitionCtrl>
          </CenteredFlexBox>
          <CenteredFlexBox>
            {transcriptions.map((t: transcriptionModel, i: number) => (
              <AbRecognitionHistoryListItem
                text={t.recognition_response[0].utterance}
                handleClick={() => handleClick(t.id)}
                key={i}
              />
            ))}
          </CenteredFlexBox>
          <AbRecognitionMediaCtrl />
        </Box>
      </CenteredFlexBox>
    </FullSizeBox>
  );
}
export default SpeechRecognition;
