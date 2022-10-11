import { useEffect } from 'react';

import Box from '@mui/material/Box';

import AbTextField from '@/components/AbTextField';
import getSynthesisMetadata from '@/services/abair/synthesis/metadata';
import { useAwaitingSynthesis, useSynthesisText } from '@/store/synthesis';
import { useSynthesisVoiceIndex, useSynthesisVoiceOptions } from '@/store/synthesis/voiceOptions';
import { useFrontPageTabs } from '@/store/tabs';
import { useBreakpointSize } from '@/store/viewDimensions';

interface AbRecognitionCtrlProps {
  children: React.ReactNode;
}

const AbSynthesisCtrl = ({ children }: AbRecognitionCtrlProps) => {
  const { frontPageTabs } = useFrontPageTabs();
  const { breakpointSize } = useBreakpointSize();
  const { synthesisText, setSynthesisText } = useSynthesisText();
  const { awaitingSynthesis } = useAwaitingSynthesis();

  const { synthesisVoiceOptions, setSynthesisVoiceOptions } = useSynthesisVoiceOptions();
  const { setSynthesisVoiceIndex } = useSynthesisVoiceIndex();

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
      sx={{
        width: '100%',
        backgroundColor: frontPageTabs === 0 ? 'secondary.light' : 'primary.light',
        borderRadius: { sm: 3, xs: 0 },
        boxShadow: { sm: 6, xs: 3 },
        position: 'relative',
      }}
    >
      <AbTextField
        key={frontPageTabs}
        label="scríobh anseo"
        rows={breakpointSize === 'xs' ? 3 : 4}
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
