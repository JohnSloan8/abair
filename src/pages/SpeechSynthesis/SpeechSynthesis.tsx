import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import InfoHeader from '@/components/InfoHeader';
import Meta from '@/components/Meta';

function SpeechSynthesis() {
  return (
    <>
      <Meta title="speech synthesis" />
      <InfoHeader title="Speech Synthesis" />
      <Box component="form" noValidate autoComplete="off">
        <TextField
          sx={{ width: '50%', backgroundColor: 'white' }}
          id="outlined-multiline-static"
          label="Scríobh anseo"
          multiline
          rows={4}
          defaultValue=""
          autoFocus
        />
        <Button>Synthesise</Button>
      </Box>
    </>
  );
}

export default SpeechSynthesis;
