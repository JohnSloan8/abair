import CircularProgress from '@mui/material/CircularProgress';

import { CenteredFlexBox } from '@/components/styled';

function Loading() {
  return (
    <CenteredFlexBox>
      <CircularProgress />
    </CenteredFlexBox>
  );
}

export default Loading;
