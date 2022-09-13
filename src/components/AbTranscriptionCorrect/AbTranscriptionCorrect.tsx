import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { transcriptionModel } from '@/models/transcription';

interface AbTranscriptionProps {
  transcription: transcriptionModel;
}

const AbTranscription = ({ transcription }: AbTranscriptionProps) => {
  return (
    <Box>
      <Typography variant="body1">{transcription.text}</Typography>
    </Box>
  );
};

export default AbTranscription;
