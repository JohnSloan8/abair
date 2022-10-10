import Box from '@mui/material/Box';

import AbInfoHeader from '@/components/AbInfoHeader';
import Meta from '@/components/Meta';
import { CenteredFlexBox, FullSizeBox } from '@/components/styled';
import AbKnowledgeCtrl from '@/sections/AbKnowledgeCtrl';

function Knowledge() {
  return (
    <FullSizeBox>
      <CenteredFlexBox>
        <Box sx={{ width: '100%', maxWidth: 'md' }}>
          <Meta title="knowledge" />
          <AbInfoHeader title="Knowledge" />
          <AbKnowledgeCtrl />
        </Box>
      </CenteredFlexBox>
    </FullSizeBox>
  );
}

export default Knowledge;
