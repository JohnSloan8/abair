import { useRecoilValue } from 'recoil';

import { Box, Button, Typography } from '@mui/material';

import AbAudioPlayer from '@/components/AbAudioPlayer';
import AbTextField from '@/components/AbTextField';
import { CenteredFlexBox } from '@/components/styled';
import getSynthesis from '@/services/abair/synthesis';
import {
  isSynthesisAudioEmpty,
  isSynthesisTextEmptyString,
  useSynthesisAudio,
  useSynthesisText,
} from '@/store/synthesis';
import { synthesisVoiceSelectedState } from '@/store/synthesis/voiceOptions';

const SynthesisTextSubmit = () => {
  const { synthesisText } = useSynthesisText();
  const { synthesisAudio, setSynthesisAudio } = useSynthesisAudio();
  const emptyString = useRecoilValue(isSynthesisTextEmptyString);
  const emptyAudio = useRecoilValue(isSynthesisAudioEmpty);
  const synthesisVoiceSelected = useRecoilValue(synthesisVoiceSelectedState);
  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <AbTextField variation="synthesis" />
      <Typography align="center" p={{ sm: 2, xs: 1 }}>
        <Button
          disabled={emptyString}
          variant="contained"
          color="primary"
          onClick={() => getSynthesis(synthesisText, synthesisVoiceSelected, setSynthesisAudio)}
        >
          Synthesise
        </Button>
      </Typography>
      {!emptyAudio && (
        <CenteredFlexBox>
          <AbAudioPlayer audioURL={synthesisAudio} />
        </CenteredFlexBox>
      )}
    </Box>
  );
};

export default SynthesisTextSubmit;
