import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { correctionModel } from '@/models/transcription';

interface AbCorrectionProps {
  correction: correctionModel;
  incorrectChunk: string;
  handleClick: () => void;
}

const AbCorrection = ({ correction, incorrectChunk }: AbCorrectionProps) => {
  return (
    <Box m={2}>
      <Grid container direction="row" alignItems="center">
        <Grid item sm={4} xs={12}>
          <Typography>{incorrectChunk}</Typography>
        </Grid>
        <Grid item sm={8} xs={12}>
          <TextField
            sx={{ backgroundColor: 'white', mt: 0 }}
            onChange={(e) => console.log(e.target.value)}
            id="outlined-multiline-static"
            label={'correction'}
            multiline
            rows={1}
            value={correction.correction_text}
            autoFocus={false}
            disabled={false}
            fullWidth
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AbCorrection;
