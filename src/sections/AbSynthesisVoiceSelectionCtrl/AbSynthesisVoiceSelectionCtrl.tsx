import Box from '@mui/material/Box';

import { CenteredFlexBox } from '@/components/styled';
import AbGenderChoicesCtrl from '@/sections/AbGenderChoicesCtrl';
import AbMapCtrl from '@/sections/AbMapCtrl';
import { useFrontPageTabs } from '@/store/tabs';

const AbSynthesisVoiceSelectionCtrl = () => {
  const { frontPageTabs } = useFrontPageTabs();

  return (
    <Box sx={{ position: 'relative', opacity: frontPageTabs === 0 ? 1 : 0 }}>
      <CenteredFlexBox>
        <Box sx={{ minWidth: 280, maxWidth: 380 }}>
          <AbMapCtrl />
        </Box>
      </CenteredFlexBox>
      <CenteredFlexBox mt={-3} mb={-1}>
        <AbGenderChoicesCtrl />
      </CenteredFlexBox>
    </Box>
  );
};

export default AbSynthesisVoiceSelectionCtrl;
