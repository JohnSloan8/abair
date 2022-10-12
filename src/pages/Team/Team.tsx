import Box from '@mui/material/Box';

import AbInfoHeader from '@/components/AbInfoHeader';
import Meta from '@/components/Meta';
import { CenteredFlexBox, FullSizeBox } from '@/components/styled';

function Team() {
  return (
    <FullSizeBox>
      <CenteredFlexBox>
        <Box sx={{ width: '100%', maxWidth: 'md' }}>
          <Meta title="team" />
          <AbInfoHeader title="Team" variant="front" />
        </Box>
      </CenteredFlexBox>
    </FullSizeBox>
  );
}

export default Team;
