import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import AbIconButton from '../AbIconButton';

interface AbRecognitionHistoryListItemProps {
  text: string;
  handleClick: () => void;
}

const AbRecognitionHistoryButtonsCtrl = ({
  text,
  handleClick,
}: AbRecognitionHistoryListItemProps) => {
  return (
    <Box>
      <Typography>{text}</Typography>
      <AbIconButton variation="editRed" handleClick={handleClick} icon={EditIcon} />
    </Box>
  );
};

export default AbRecognitionHistoryButtonsCtrl;
