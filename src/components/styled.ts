import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const FlexBox = styled(Box)({
  display: 'flex',
});

const CenteredFlexBox = styled(FlexBox)({
  justifyContent: 'center',
  alignItems: 'center',
});

const FullSizeCenteredFlexBox = styled(CenteredFlexBox)({
  width: '100%',
  height: 'calc(100vh - 64px)',
});

const FullSizeBox = styled(Box)({
  position: 'absolute',
  width: '100%',
  height: 'calc(100vh - 64px)',
});

export { FlexBox, CenteredFlexBox, FullSizeCenteredFlexBox, FullSizeBox };
