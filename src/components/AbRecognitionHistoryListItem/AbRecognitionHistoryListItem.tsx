import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import AbIconButton from '../AbIconButton';
import { CenteredFlexBox } from '../styled';

interface AbRecognitionHistoryListItemProps {
  transcriptions: string[];
  handleClick: () => void;
}

const AbRecognitionHistoryButtonsCtrl = ({
  transcriptions,
  handleClick,
}: AbRecognitionHistoryListItemProps) => {
  return (
    <CenteredFlexBox>
      <Box
        width={'100%'}
        maxWidth={550}
        boxShadow={3}
        p={1}
        borderRadius={3}
        sx={{ backgroundColor: 'warning.medium', position: 'relative' }}
      >
        {transcriptions.map((t, i) => (
          <Box key={i}>
            <Typography>
              model {i + 1}. &quot;<i>{t}</i>&quot;
            </Typography>
          </Box>
        ))}
        <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
          <AbIconButton variation="editWhite" handleClick={handleClick} icon={DeleteIcon} />
          <AbIconButton variation="editWhite" handleClick={handleClick} icon={EditIcon} />
        </Box>
      </Box>
    </CenteredFlexBox>
  );
};

export default AbRecognitionHistoryButtonsCtrl;
