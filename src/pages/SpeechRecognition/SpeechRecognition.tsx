import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import AbInfoHeader from '@/components/AbInfoHeader';
import AbRecognitionHistoryListItem from '@/components/AbRecognitionHistoryListItem';
import Meta from '@/components/Meta';
import { CenteredFlexBox, FullSizeBox } from '@/components/styled';
import { transcriptionModel } from '@/models/transcription';
import AbRecognitionButtonsCtrl from '@/sections/AbRecognitionButtonsCtrl';
import AbRecognitionCtrl from '@/sections/AbRecognitionCtrl';
import AbRecognitionMediaCtrl from '@/sections/AbRecognitionMediaCtrl';
import { getTranscriptions } from '@/services/supabase/transcriptions';
import getThisSessionTranscriptions from '@/services/supabase/transcriptions/getThisSessionTranscriptions';
import { useSession, useSessionStart } from '@/store/auth';
import { useTranscriptions } from '@/store/transcriptions';

function SpeechRecognition() {
  const { session } = useSession();
  const { transcriptions, setTranscriptions } = useTranscriptions();
  const { sessionStart } = useSessionStart();

  useEffect(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (id: number | undefined) => {
    console.log('clicked:', id);
  };

  return (
    <FullSizeBox sx={{ backgroundColor: 'warning.wafer' }}>
      {/* {session === null && (
        <AbAlertCtrl description="you must login to use this feature" goTo="/login" />
      )} */}
      <CenteredFlexBox>
        <Box sx={{ width: '100%', maxWidth: 'sm' }}>
          <Meta title="speech recognition" />
          <AbInfoHeader title="Speech Recognition" />

          <CenteredFlexBox mb={4}>
            <AbRecognitionCtrl>
              <AbRecognitionButtonsCtrl />
            </AbRecognitionCtrl>
          </CenteredFlexBox>
          <CenteredFlexBox>
            <Grid container direction="column">
              {transcriptions.map((t: transcriptionModel, i: number) => (
                <Box key={i} m={0.5}>
                  <AbRecognitionHistoryListItem
                    transcriptions={t.recognition_response.map(({ utterance }) => utterance)}
                    handleClick={() => handleClick(t.id)}
                    key={i}
                  />
                </Box>
              ))}
            </Grid>
          </CenteredFlexBox>
          <AbRecognitionMediaCtrl />
        </Box>
      </CenteredFlexBox>
    </FullSizeBox>
  );
}
export default SpeechRecognition;
