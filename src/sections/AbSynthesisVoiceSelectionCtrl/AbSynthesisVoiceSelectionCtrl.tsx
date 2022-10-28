import { useRecoilValue } from 'recoil';

import Box from '@mui/material/Box';

import { CenteredFlexBox } from '@/components/styled';
import AbGenderChoicesCtrl from '@/sections/AbGenderChoicesCtrl';
import AbMapCtrl from '@/sections/AbMapCtrl';
import { useFrontPageTabs } from '@/store/tabs';
import { frontPageSelectionBoxSize } from '@/store/viewDimensions';

const AbSynthesisVoiceSelectionCtrl = () => {
  const { frontPageTabs } = useFrontPageTabs();
  const frontPageSelectionBoxSizeValue = useRecoilValue(frontPageSelectionBoxSize);
  return (
    <Box
      width={'100%'}
      height={frontPageSelectionBoxSizeValue}
      sx={{
        opacity: frontPageTabs === 0 ? 1 : 0,
        position: 'relative',
      }}
      minHeight={300}
    >
      <CenteredFlexBox>
        <Box
          height={{
            sm: frontPageSelectionBoxSizeValue - 125,
            xs: frontPageSelectionBoxSizeValue - 105,
          }}
          minWidth={300}
          maxWidth={600}
          minHeight={200}
        >
          <CenteredFlexBox height={'100%'} width={'100%'} sx={{ position: 'relative' }}>
            <AbMapCtrl />
          </CenteredFlexBox>
        </Box>
      </CenteredFlexBox>
      <CenteredFlexBox height={{ sm: 85, xs: 55 }}>
        <AbGenderChoicesCtrl />
      </CenteredFlexBox>
    </Box>
  );
};

export default AbSynthesisVoiceSelectionCtrl;
