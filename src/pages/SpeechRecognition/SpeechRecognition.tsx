import Box from '@mui/material/Box';

import AbInfoHeader from '@/components/AbInfoHeader';
import Meta from '@/components/Meta';
import { CenteredFlexBox } from '@/components/styled';

// import { transcriptionModel } from '@/models/transcription';
// import { postCorrection } from '@/services/supabase/transcriptions';
// import { useSession, useSessionStart } from '@/store/auth';

function SpeechRecognition() {
  console.log('in speech recognition');

  // const { session } = useSession();
  // const { transcriptions, setTranscriptions } = useTranscriptions();

  // const handleCorrection = (
  //   correct: boolean | null,
  //   correction: string | null | undefined,
  //   corrected: boolean,
  // ) => {
  //   setTranscription({
  //     ...transcription,
  //     correct: correct,
  //     correction: correction,
  //     corrected: corrected,
  //   });
  //   // postCorrection(transcription).then((res) => {
  //   //   res
  //   //     ? updateTranscriptions(
  //   //         transcription.id,
  //   //         correct,
  //   //         correction,
  //   //         corrected,
  //   //         transcriptions,
  //   //         setTranscriptions,
  //   //       )
  //   //     : alert('postCorrection failed');
  //   // });
  //   console.log('handling correction');
  // };

  return (
    <>
      <CenteredFlexBox>
        <Box sx={{ width: '100%', maxWidth: 'sm' }}>
          <Meta title="speech recognition" />
          <AbInfoHeader title="Speech Recognition" />
          {/* <Typography variant="body1" align="center">
            {status}
          </Typography> */}
          <CenteredFlexBox pt={4}></CenteredFlexBox>
        </Box>
      </CenteredFlexBox>
      {/* {transcription !== undefined && <AbTranscription t={transcription}></AbTranscription>} */}
    </>
  );
}
export default SpeechRecognition;
