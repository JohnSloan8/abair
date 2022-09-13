import { SetterOrUpdater } from 'recoil';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { transcriptionModel } from '@/models/transcription';

interface AbTranscriptionEditableProps {
  transcription: transcriptionModel;
  setTranscriptions: SetterOrUpdater<transcriptionModel[]>;
}

const AbTranscriptionEditable = ({
  transcription,
}: // setTranscriptions,
AbTranscriptionEditableProps) => {
  return (
    <Box>
      <Typography variant="body1">{transcription.text}</Typography>
      <TextField
        sx={{ backgroundColor: 'white', mt: 0 }}
        onChange={(e) => {
          console.log(e.target.value);
        }}
        id="outlined-multiline-static"
        label={'correction'}
        multiline
        rows={2}
        value={transcription.text}
        autoFocus={false}
        disabled={false}
        fullWidth
      />
    </Box>
  );
};

export default AbTranscriptionEditable;
