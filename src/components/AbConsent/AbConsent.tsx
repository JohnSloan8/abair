import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import AbButton from '../AbButton';
import { CenteredFlexBox } from '../styled';

interface AbConsentProps {
  title: string;
  description: string;
  condition1: string;
  handleClick: (agree: boolean) => void;
}

function AbConsent({ title, description, condition1, handleClick }: AbConsentProps) {
  return (
    <Box
      width={400}
      border={3}
      p={2}
      sx={{ backgroundColor: 'background.paper', borderColor: 'warning.medium', borderRadius: 3 }}
    >
      <Typography variant={'h6'} py={3} color="text.main" align="center">
        {title}
      </Typography>

      <Typography variant={'body1'} py={3} color="text.main" align="center">
        {description}
      </Typography>

      <Typography variant={'body1'} py={3} color="text.main" align="center">
        {condition1}
      </Typography>

      <CenteredFlexBox pb={2}>
        <Box m={1}>
          <AbButton
            label={'disagree'}
            selected={true}
            variation={'alert'}
            onClick={() => {
              handleClick(false);
            }}
          />
        </Box>
        <Box m={1}>
          <AbButton
            label={'agree'}
            selected={true}
            variation={'model'}
            onClick={() => {
              handleClick(true);
            }}
          />
        </Box>
      </CenteredFlexBox>
    </Box>
  );
}

export default AbConsent;
