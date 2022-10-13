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
  height: '100%',
});

const FullSizeBox = styled(Box)({
  position: 'relative',
  width: '100%',
  height: 'calc(100vh - 64px)',
});

const TrueFullSizeBox = styled(Box)({
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
  height: '100%',
});

export { TrueFullSizeBox, FlexBox, CenteredFlexBox, FullSizeCenteredFlexBox, FullSizeBox };
