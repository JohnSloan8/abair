import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import AbButton from '../AbButton';
import { CenteredFlexBox } from '../styled';

interface AbAlertProps {
  description: string;
  handleClick: () => void;
}

function AbAlert({ description, handleClick }: AbAlertProps) {
  return (
    <Box
      width={300}
      border={3}
      sx={{ backgroundColor: 'background.default', borderColor: 'warning.medium', borderRadius: 3 }}
    >
      <Typography variant={'body1'} py={6} color="text.main" align="center">
        {description}
      </Typography>

      <CenteredFlexBox pb={2}>
        <AbButton label={'ok'} selected={true} variation={'alert'} onClick={handleClick} />
      </CenteredFlexBox>
    </Box>
  );
}

export default AbAlert;
