import { useEffect } from 'react';

import Box from '@mui/material/Box';

import AbTextField from '@/components/AbTextField';
import AbSynthesisButtonsCtrl from '@/sections/AbSynthesisButtonsCtrl';
import getSynthesisMetadata from '@/services/abair/synthesis/metadata';
import { useAwaitingSynthesis, useSynthesisText } from '@/store/synthesis';
import { useSynthesisVoiceIndex, useSynthesisVoiceOptions } from '@/store/synthesis/voiceOptions';
import { useFrontPageTabs } from '@/store/tabs';

const AbSynthesisCtrl = () => {
  const { frontPageTabs } = useFrontPageTabs();

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
        rows={4}
        disabled={awaitingSynthesis ? true : false}
        autoFocus={false}
        getter={synthesisText}
        onChangeHandler={(text) => {
          setSynthesisText(text);
        }}
      />
      <Box sx={{ width: '100%', height: 50 }}>
        <AbSynthesisButtonsCtrl />
      </Box>
    </Box>
  );
};

export default AbSynthesisCtrl;
