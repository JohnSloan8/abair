import { useEffect } from 'react';

import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

import AbTextField from '@/components/AbTextField';
import getSynthesisMetadata from '@/services/abair/synthesis/metadata';
import { useAwaitingSynthesis, useSynthesisText } from '@/store/synthesis';
import { useSynthesisVoiceIndex, useSynthesisVoiceOptions } from '@/store/synthesis/voiceOptions';
import { useFrontPageTabs } from '@/store/tabs';

interface AbRecognitionCtrlProps {
  children: React.ReactNode;
}

const AbSynthesisCtrl = ({ children }: AbRecognitionCtrlProps) => {
  const { frontPageTabs } = useFrontPageTabs();

  const { synthesisText, setSynthesisText } = useSynthesisText();
  const { awaitingSynthesis } = useAwaitingSynthesis();

  const { synthesisVoiceOptions, setSynthesisVoiceOptions } = useSynthesisVoiceOptions();
  const { setSynthesisVoiceIndex } = useSynthesisVoiceIndex();

  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    synthesisVoiceOptions.length === 0
      ? getSynthesisMetadata(setSynthesisVoiceOptions)
      : setSynthesisVoiceIndex(3);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [synthesisVoiceOptions]);

  return (
    <Box
      px={{ sm: 4, xs: 1 }}
      pt={2}
      mx={1}
      sx={{
        width: 550,
        backgroundColor: frontPageTabs === 0 ? 'secondary.light' : 'primary.light',
        borderRadius: 3,
        boxShadow: 6,
        position: 'relative',
      }}
    >
      <AbTextField
        key={frontPageTabs}
        label="scríobh anseo"
        rows={small ? 3 : 4}
        disabled={awaitingSynthesis ? true : false}
        autoFocus={true}
        getter={synthesisText}
        onChangeHandler={(text) => {
          setSynthesisText(text);
        }}
      />
      <Box sx={{ width: '100%', height: 50 }}>{children}</Box>
    </Box>
  );
};

export default AbSynthesisCtrl;
