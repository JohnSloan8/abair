import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import AbInfoHeader from '@/components/AbInfoHeader';
import { CenteredFlexBox } from '@/components/styled';

const AbHomePageKnowledgeCtrl = () => {
  return (
    <Box height={'100%'}>
      <CenteredFlexBox height={'15%'}>
        <AbInfoHeader
          title="Knowledge Base"
          description="Learn about the linguistic research being carried out which informs the technological development"
          variant="front"
        />
      </CenteredFlexBox>
      <CenteredFlexBox height={'85%'}>
        <Box component={Link} to={'/knowledge'}>
          <Typography variant="body1" m={2} align="center">
            Read Publications
          </Typography>
        </Box>
      </CenteredFlexBox>
    </Box>
  );
};

export default AbHomePageKnowledgeCtrl;
