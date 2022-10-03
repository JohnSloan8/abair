import { useEffect } from 'react';

import Box from '@mui/material/Box';

import { CenteredFlexBox } from '@/components/styled';
import AbAudioPlayerCtrl from '@/sections/AbAudioPlayerCtrl';
import AbRecognitionMediaCtrl from '@/sections/AbRecognitionMediaCtrl';
import AbSynthesisRecognitionCtrl from '@/sections/AbSynthesisRecognitionCtrl';
import AbSynthesisRecognitionSelectionCtrl from '@/sections/AbSynthesisRecognitionSelectionCtrl ';
import AbTabsCtrl from '@/sections/AbTabsCtrl';
import { useFrontPageTabs } from '@/store/tabs';
import { useViewHeight } from '@/store/viewDimensions';

const AbHomePageSection1 = () => {
  const { viewHeight } = useViewHeight();
  const { frontPageTabs } = useFrontPageTabs();

  useEffect(() => {
    console.log('viewHeight', viewHeight);
  }, [viewHeight]);

  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        backgroundColor: 'background.default',
      }}
    >
      <CenteredFlexBox>
        <AbTabsCtrl variation="frontpage" />
      </CenteredFlexBox>
      <Box
        sx={{
          width: '100%',
          position: 'relative',
          backgroundColor: frontPageTabs === 0 ? 'secondary.wafer' : 'warning.wafer',
        }}
      >
        <CenteredFlexBox minHeight={{ sm: 420, xs: 300 }}>
          <AbSynthesisRecognitionSelectionCtrl />
        </CenteredFlexBox>

        <CenteredFlexBox>
          <AbSynthesisRecognitionCtrl />
        </CenteredFlexBox>
        <CenteredFlexBox py={3}>
          {frontPageTabs === 0 ? (
            <AbAudioPlayerCtrl variant="synthesis" />
          ) : (
            <AbAudioPlayerCtrl variant="recognition" />
          )}
        </CenteredFlexBox>
        <AbRecognitionMediaCtrl />
      </Box>
    </Box>
  );
};

export default AbHomePageSection1;
