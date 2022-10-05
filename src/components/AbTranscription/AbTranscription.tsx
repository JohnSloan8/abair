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
  transcriptionBoxHeight: number;
  handleCorrection: (
    correct: boolean | null,
    correction: string | null | undefined,
    corrected: boolean,
  ) => void;

  // setTranscriptions: SetterOrUpdater<transcriptionModel[]>;
}

const AbTranscription = ({ t, handleCorrection, transcriptionBoxHeight }: AbTranscriptionProps) => {
  const [correctionText, setCorrectionText] = useState<string | null | undefined>('');

  useEffect(() => {
    t.corrected
      ? setCorrectionText(t.correction)
      : setCorrectionText(t.recognition_response[0].utterance);
    //eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center">
      <Grid item xs={1}>
        <AbIconButton
          variation="incorrect"
          handleClick={() => {
            handleCorrection(false, '', false);
          }}
          icon={CloseIcon}
        />
      </Grid>
      <Grid item xs={10}>
        <Box
          p={1}
          borderRadius={2}
          sx={{
            backgroundColor:
              t.correct === null
                ? 'background.paper'
                : t.correct
                ? 'primary.wafer'
                : 'warning.wafer',
            borderColor:
              t.correct === null
                ? 'secondary.light'
                : t.correct
                ? 'primary.wafer'
                : t.correction === null
                ? 'warning.main'
                : 'warning.wafer',
            overflowY: 'scroll',
          }}
          height={transcriptionBoxHeight}
        >
          {t.correct === null ? (
            <>
              <Typography variant="body1" p={1}>
                {t.recognition_response[0].utterance}
              </Typography>
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
      </Grid>

      <Grid item xs={1}>
        <AbIconButton
          variation="correct"
          handleClick={() => {
            handleCorrection(true, '', false);
          }}
          icon={DoneIcon}
        />
      </Grid>
    </Grid>
  );
};

export default AbTranscription;
