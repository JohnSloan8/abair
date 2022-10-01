import Box from '@mui/material/Box';

import { CenteredFlexBox } from '@/components/styled';
import AbRecognitionInstructionsCtrl from '@/sections/AbRecognitionInstructionsCtrl ';
import AbSynthesisVoiceSelectionCtrl from '@/sections/AbSynthesisVoiceSelectionCtrl';
import { useFrontPageTabs } from '@/store/tabs';

const AbSynthesisRecognitionSelectionCtrl = () => {
  const { frontPageTabs } = useFrontPageTabs();
  return (
    <Box height={500}>
      <CenteredFlexBox>
        {frontPageTabs === 0 ? (
          <AbSynthesisVoiceSelectionCtrl />
        ) : (
          <AbRecognitionInstructionsCtrl />
        )}
      </CenteredFlexBox>
    </Box>
  );
};

export default AbSynthesisRecognitionSelectionCtrl;