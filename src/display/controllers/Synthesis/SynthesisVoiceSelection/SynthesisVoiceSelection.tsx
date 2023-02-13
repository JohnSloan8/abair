import { useRecoilValue } from 'recoil';

import Box from '@mui/material/Box';

import GenderChoices from '@/display/controllers/GenderChoices';
import Map from '@/display/controllers/Map';
import { CenteredFlexBox } from '@/display/utils/flex';
import { frontPageSelectionBoxSize } from '@/store/viewDimensions';

const SynthesisVoiceSelection = () => {
  const frontPageSelectionBoxSizeValue = useRecoilValue(frontPageSelectionBoxSize);
  return (
    <Box width={'100%'} minHeight={280}>
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
      <CenteredFlexBox height={{ sm: 65, xs: 55 }} mt={-2}>
        <GenderChoices />
      </CenteredFlexBox>
    </Box>
  );
};

export default SynthesisVoiceSelection;
