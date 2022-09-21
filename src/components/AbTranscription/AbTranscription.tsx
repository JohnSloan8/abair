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
  handleCorrection: () => // transcription: transcriptionModel,
  // correct: boolean | null,
  // correction: string | null,
  // corrected: boolean,
  void;
  children: React.ReactNode;
  // setTranscriptions: SetterOrUpdater<transcriptionModel[]>;
}

const AbTranscription = ({ t, handleCorrection, children }: AbTranscriptionProps) => {
  const [correctionText, setCorrectionText] = useState<string | null>(null);

  useEffect(() => {
    console.log('t:', t);
    // t.corrected
    //   ? setCorrectionText(t.correction)
    //   : setCorrectionText(t.text);
    // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/exhaustive-deps
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
          <Typography variant="body1">
            {t.recognition_response.test_model.hypotheses[0].utterence}
          </Typography>
          <Grid container direction="row" justifyContent="space-evenly" alignItems="center" mt={1}>
            <Grid item>
              <AbIconButton
                variation="incorrect"
                handleClick={() => {
                  // handleCorrection(t, false, null, false);
                  handleCorrection();
                }}
                icon={CloseIcon}
              />
            </Grid>
            <Grid item>
              <AbIconButton
                variation="correct"
                handleClick={() => {
                  // handleCorrection(t, true, null, false);
                  handleCorrection();
                }}
                icon={DoneIcon}
              />
            </Grid>
          </Grid>
        </>
      ) : t.correct ? (
        <Box sx={{ position: 'relative' }}>
          <Typography variant="body1">
            {t.recognition_response.test_model.hypotheses[0].utterence}
          </Typography>
          <Box sx={{ position: 'absolute', top: -80, right: -20 }}>
            <AbIconButton
              variation="editGreen"
              handleClick={() => {
                // handleCorrection(t, null, null, false);
                handleCorrection();
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
              // onClick={() => handleCorrection(t, false, correctionText, true)}
              onClick={() => handleCorrection()}
            >
              Save
            </Button>
          </Typography>
        </>
      ) : (
        <Box sx={{ position: 'relative' }}>
          <Typography variant="body1">{t.correction}</Typography>
          <Box sx={{ position: 'absolute', top: -80, right: -20 }}>
            <AbIconButton
              variation="editRed"
              handleClick={() => {
                // handleCorrection(t, false, t.correction, false);
                handleCorrection();
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
