import Box from '@mui/material/Box';

import { CenteredFlexBox } from '@/components/styled';
import AbGenderChoicesCtrl from '@/sections/AbGenderChoicesCtrl';
import AbMapCtrl from '@/sections/AbMapCtrl';
import { useFrontPageTabs } from '@/store/tabs';

const AbSynthesisVoiceSelectionCtrl = () => {
  const { frontPageTabs } = useFrontPageTabs();

  return (
    <Box
      width={'100%'}
      sx={{
        opacity: frontPageTabs === 0 ? 1 : 0,
      }}
    >
      <CenteredFlexBox>
        <Box width={'100%'} sx={{ minWidth: 240, maxWidth: { sm: 440, xs: 240 } }}>
          <AbMapCtrl />
        </Box>
      </CenteredFlexBox>
      <CenteredFlexBox mt={-2} mb={-2}>
        <AbGenderChoicesCtrl />
      </CenteredFlexBox>
    </Box>
  );
};

export default AbSynthesisVoiceSelectionCtrl;
