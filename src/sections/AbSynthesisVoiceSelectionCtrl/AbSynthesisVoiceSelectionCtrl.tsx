import Box from '@mui/material/Box';

import { CenteredFlexBox } from '@/components/styled';
import AbGenderChoicesCtrl from '@/sections/AbGenderChoicesCtrl';
import AbMapCtrl from '@/sections/AbMapCtrl';
import AbSynthesisVoiceInfoCtrl from '@/sections/AbSynthesisVoiceInfoCtrl';
import { useFrontPageTabs } from '@/store/tabs';

const AbSynthesisVoiceSelectionCtrl = () => {
  const { frontPageTabs } = useFrontPageTabs();

  return (
    <Box sx={{ position: 'relative', opacity: frontPageTabs === 0 ? 1 : 0 }}>
      <Box pt={2}>
        <AbSynthesisVoiceInfoCtrl />
      </Box>
      <CenteredFlexBox>
        <Box sx={{ minWidth: 300, maxWidth: 450 }}>
          <AbMapCtrl />
        </Box>
      </CenteredFlexBox>
      <CenteredFlexBox>
        <AbGenderChoicesCtrl />
      </CenteredFlexBox>
    </Box>
  );
};

export default AbSynthesisVoiceSelectionCtrl;