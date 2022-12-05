/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';

import { AbTextField } from 'abair-components';

import getSynthesisMetadata from '@/services/abair/synthesis/metadata';
import { useAwaitingSynthesis, useSynthesisText } from '@/store/synthesis';
import { useSynthesisVoiceOptions } from '@/store/synthesis/voiceOptions';
// import { useFrontPageTabs } from '@/store/tabs';
import { useBreakpointSize } from '@/store/viewDimensions';

interface RecognitionProps {
  children: React.ReactNode;
}

const AbSynthesisCtrl = ({ children }: RecognitionProps) => {
  // const { frontPageTabs } = useFrontPageTabs();
  const { breakpointSize } = useBreakpointSize();
  const { synthesisText, setSynthesisText } = useSynthesisText();
  const { awaitingSynthesis } = useAwaitingSynthesis();
  const { t } = useTranslation();

  const { synthesisVoiceOptions, setSynthesisVoiceOptions } = useSynthesisVoiceOptions();

  useEffect(() => {
    if (synthesisVoiceOptions.length === 0) {
      getSynthesisMetadata().then((res: any) => {
        setSynthesisVoiceOptions(res);
        console.log('voices:', res);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      px={{ sm: 4, xs: 1 }}
      pt={2}
      sx={{
        width: '100%',
        backgroundColor: 'secondary.light',
        borderRadius: { sm: 3, xs: 0 },
        boxShadow: { sm: 6, xs: 3 },
        position: 'relative',
      }}
    >
      <AbTextField
        // key={frontPageTabs}
        label={t('pages.home.writeHere')}
        rows={breakpointSize === 'xs' ? 3 : 4}
        disabled={awaitingSynthesis ? true : false}
        autoFocus={false}
        value={synthesisText}
        onChange={(text) => {
          setSynthesisText(text);
        }}
      />
      <Box sx={{ width: '100%', height: 50 }}>{children}</Box>
    </Box>
  );
};

export default AbSynthesisCtrl;
