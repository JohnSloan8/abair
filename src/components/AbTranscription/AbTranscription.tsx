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
  transcription: transcriptionModel;
  handleCorrection: (
    transcription: transcriptionModel,
    correct: boolean | null,
    correction: string | null,
    corrected: boolean,
  ) => void;
  children: React.ReactNode;
  // setTranscriptions: SetterOrUpdater<transcriptionModel[]>;
}

const AbTranscription = ({ transcription, handleCorrection, children }: AbTranscriptionProps) => {
  const [correctionText, setCorrectionText] = useState<string | null>(null);

  useEffect(() => {
    transcription.corrected
      ? setCorrectionText(transcription.correction)
      : setCorrectionText(transcription.text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      m={{ sm: 2, xs: 1 }}
      p={2}
      border={3}
      borderRadius={2}
      sx={{
        backgroundColor:
          transcription.correct === null
            ? 'secondary.wafer'
            : transcription.correct
            ? 'primary.wafer'
            : 'warning.wafer',
        borderColor:
          transcription.correct === null
            ? 'secondary.light'
            : transcription.correct
            ? 'primary.wafer'
            : transcription.correction === null
            ? 'warning.main'
            : 'warning.wafer',
      }}
    >
      {children}
      {transcription.correct === null ? (
        <>
          <Typography variant="body1">{transcription.text}</Typography>
          <Grid container direction="row" justifyContent="space-evenly" alignItems="center" mt={1}>
            <Grid item>
              <AbIconButton
                variation="incorrect"
                handleClick={() => {
                  handleCorrection(transcription, false, null, false);
                }}
                icon={CloseIcon}
              />
            </Grid>
            <Grid item>
              <AbIconButton
                variation="correct"
                handleClick={() => {
                  handleCorrection(transcription, true, null, false);
                }}
                icon={DoneIcon}
              />
            </Grid>
          </Grid>
        </>
      ) : transcription.correct ? (
        <Box sx={{ position: 'relative' }}>
          <Typography variant="body1">{transcription.text}</Typography>
          <Box sx={{ position: 'absolute', top: -80, right: -20 }}>
            <AbIconButton
              variation="editGreen"
              handleClick={() => {
                handleCorrection(transcription, null, null, false);
              }}
              icon={EditIcon}
            />
          </Box>
        </Box>
      ) : !transcription.corrected ? (
        <>
          <TextField
            sx={{ backgroundColor: 'white', mt: 0 }}
            onChange={(e) => {
              setCorrectionText(e.target.value);
            }}
            id="outlined-multiline-static"
            label={'correction'}
            multiline
            value={correctionText}
            autoFocus={false}
            disabled={false}
            fullWidth
          />
          <Typography align="center" pt={{ sm: 2, xs: 1 }}>
            <Button
              disabled={false}
              variant="contained"
              color="primary"
              onClick={() => handleCorrection(transcription, false, correctionText, true)}
            >
              Save
            </Button>
          </Typography>
        </>
      ) : (
        <Box sx={{ position: 'relative' }}>
          <Typography variant="body1">{transcription.correction}</Typography>
          <Box sx={{ position: 'absolute', top: -80, right: -20 }}>
            <AbIconButton
              variation="editRed"
              handleClick={() => {
                handleCorrection(transcription, false, transcription.correction, false);
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
