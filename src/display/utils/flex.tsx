import Box from '@mui/material/Box';
import { styled } from '@mui/system';

import { headerHeight } from '@/config';

const FlexBox = styled(Box)({
  display: 'flex',
});

const CenteredFlexBox = styled(FlexBox)({
  justifyContent: 'center',
  alignItems: 'center',
});

const HorizontallyCenteredFlexBox = styled(FlexBox)({
  justifyContent: 'center',
});

const FullSizeCenteredFlexBox = styled(CenteredFlexBox)({
  width: '100%',
  height: '100%',
});

const FullSizeBox = styled(Box)({
  position: 'relative',
  width: '100%',
  height: `calc(100vh - ${headerHeight})`,
});

const TwoThirdsSizeBox = styled(Box)({
  position: 'relative',
  width: '100%',
  height: `calc(66.67vh - ${headerHeight})`,
});

const AlmostFullSizeBox = styled(Box)({
  position: 'relative',
  width: '100%',
  height: `calc(90vh - ${headerHeight})`,
});

export {
  HorizontallyCenteredFlexBox,
  FlexBox,
  CenteredFlexBox,
  FullSizeCenteredFlexBox,
  FullSizeBox,
  AlmostFullSizeBox,
  TwoThirdsSizeBox,
};
