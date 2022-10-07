import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { CenteredFlexBox } from '../styled';

interface AbTranscriptionListItemProps {
  selected: boolean;
  correction: string | null | undefined;
  transcriptions: string[];
  handleClick: () => void;
  textbox?: React.ReactNode;
  transcriptionButtons?: React.ReactNode;
}

const AbTranscriptionListItem = ({
  selected,
  correction,
  transcriptions,
  handleClick,
  textbox,
  transcriptionButtons,
}: AbTranscriptionListItemProps) => {
  return (
    <CenteredFlexBox>
      <Box
        width={selected ? '100%' : '90%'}
        maxWidth={selected ? 550 : 500}
        boxShadow={selected ? 5 : 2}
        p={selected ? 2 : 1}
        borderRadius={selected ? 3 : 2}
        sx={{
          backgroundColor: 'warning.light',
          color: '#000',
          position: 'relative',
          '&:hover': {
            backgroundColor: selected ? 'warning.light' : 'warning.medium',
            cursor: 'pointer',
          },
        }}
        onClick={handleClick}
      >
        {correction && <p>correction</p>}
        {textbox}
        {transcriptionButtons}
        {transcriptions.map((t, i) => (
          <Box key={i}>
            <Typography>
              model {i + 1}. &quot;<i>{t}</i>&quot;
            </Typography>
          </Box>
        ))}
      </Box>
    </CenteredFlexBox>
  );
};

export default AbTranscriptionListItem;
