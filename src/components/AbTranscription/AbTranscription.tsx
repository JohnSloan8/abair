import { useEffect, useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import AbIconButton from '@/components/AbIconButton';
import { transcriptionModel } from '@/models/transcription';

interface AbTranscriptionProps {
  t: transcriptionModel;
  handleCorrection: (correct: boolean | null, correction: string, corrected: boolean) => void;
  children: React.ReactNode;
  // setTranscriptions: SetterOrUpdater<transcriptionModel[]>;
}

const AbTranscription = ({ t, handleCorrection, children }: AbTranscriptionProps) => {
  const [correctionText, setCorrectionText] = useState<string>('');

  useEffect(() => {
    console.log('t:', t);
    t.corrected
      ? setCorrectionText(t.correction)
      : setCorrectionText(t.recognition_response[0].utterance);
    //eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      m={{ sm: 2, xs: 1 }}
      p={2}
      border={3}
      borderRadius={2}
      sx={{
        backgroundColor:
          t.correct === null ? 'secondary.wafer' : t.correct ? 'primary.wafer' : 'warning.wafer',
        borderColor:
          t.correct === null
            ? 'secondary.light'
            : t.correct
            ? 'primary.wafer'
            : t.correction === null
            ? 'warning.main'
            : 'warning.wafer',
      }}
    >
      {children}
      {t.correct === null ? (
        <>
          <Typography variant="body1" p={1}>
            {t.recognition_response[0].utterance}
          </Typography>
          <Grid container direction="row" justifyContent="space-evenly" alignItems="center" mt={4}>
            <Grid item>
              <AbIconButton
                variation="incorrect"
                handleClick={() => {
                  handleCorrection(false, '', false);
                }}
                icon={CloseIcon}
              />
            </Grid>
            <Grid item>
              <AbIconButton
                variation="correct"
                handleClick={() => {
                  handleCorrection(true, '', false);
                }}
                icon={DoneIcon}
              />
            </Grid>
          </Grid>
        </>
      ) : t.correct ? (
        <Box sx={{ position: 'relative' }}>
          <Typography m={2} variant="body1" align="center">
            {t.recognition_response[0].utterance}
          </Typography>
          <Box sx={{ position: 'absolute', top: -110, right: -20 }}>
            <AbIconButton
              variation="editGreen"
              handleClick={() => {
                handleCorrection(null, '', false);
              }}
              icon={EditIcon}
            />
          </Box>
        </Box>
      ) : !t.corrected ? (
        <>
          <TextField
            sx={{ backgroundColor: 'white', mt: 0 }}
            onChange={(e) => {
              setCorrectionText(e.target.value);
            }}
            id="outlined-multiline-static"
            multiline
            value={correctionText}
            autoFocus={true}
            disabled={false}
            fullWidth
          />
          <Typography align="center" pt={{ sm: 2, xs: 1 }}>
            <Button
              disabled={false}
              variant="contained"
              color="warning"
              onClick={() => handleCorrection(false, correctionText, true)}
            >
              Save
            </Button>
          </Typography>
        </>
      ) : (
        <Box sx={{ position: 'relative' }}>
          <Typography variant="body1" p={1}>
            {t.correction}
          </Typography>
          <Box sx={{ position: 'absolute', top: -80, right: -20 }}>
            <AbIconButton
              variation="editRed"
              handleClick={() => {
                handleCorrection(false, t.correction, false);
              }}
              icon={EditIcon}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default AbTranscription;
