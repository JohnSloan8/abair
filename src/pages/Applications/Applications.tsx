import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function Applications() {
  return (
    <>
      <Meta title="applications" />
      <FullSizeCenteredFlexBox flexDirection="column">
        <Typography variant="h3">Applications</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Applications;
