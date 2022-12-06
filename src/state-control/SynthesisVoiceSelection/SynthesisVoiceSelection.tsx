import { useRecoilValue } from 'recoil';

import Box from '@mui/material/Box';

import GenderChoices from '@/state-control/GenderChoices';
import Map from '@/state-control/Map';
import { useFrontPageTabs } from '@/store/tabs';
import { frontPageSelectionBoxSize } from '@/store/viewDimensions';
import { CenteredFlexBox } from '@/utils/flex';

const SynthesisVoiceSelection = () => {
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
            <Map />
          </CenteredFlexBox>
        </Box>
      </CenteredFlexBox>
      <CenteredFlexBox height={{ sm: 85, xs: 55 }} mt={-2}>
        <GenderChoices />
      </CenteredFlexBox>
    </Box>
  );
};

export default SynthesisVoiceSelection;
