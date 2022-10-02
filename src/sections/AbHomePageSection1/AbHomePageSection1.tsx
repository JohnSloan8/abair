import { useEffect } from 'react';

import Box from '@mui/material/Box';

import { CenteredFlexBox } from '@/components/styled';
import AbRecognitionMediaCtrl from '@/sections/AbRecognitionMediaCtrl';
import AbSynthesisRecognitionCtrl from '@/sections/AbSynthesisRecognitionCtrl';
import AbSynthesisRecognitionSelectionCtrl from '@/sections/AbSynthesisRecognitionSelectionCtrl ';
import AbTabsCtrl from '@/sections/AbTabsCtrl';
import { useViewHeight } from '@/store/viewDimensions';

const AbHomePageSection1 = () => {
  const { viewHeight } = useViewHeight();

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
        <AbSynthesisRecognitionSelectionCtrl />
      </CenteredFlexBox>
      <CenteredFlexBox>
        <AbTabsCtrl variation="frontpage" />
      </CenteredFlexBox>
      <CenteredFlexBox>
        <AbSynthesisRecognitionCtrl />
      </CenteredFlexBox>
      <AbRecognitionMediaCtrl />
    </Box>
  );
};

export default AbHomePageSection1;
