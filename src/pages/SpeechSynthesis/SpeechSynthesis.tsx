import { useRecoilValue } from 'recoil';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import AbAccordion from '@/components/AbAccordion';
import AbAudioPlayer from '@/components/AbAudioPlayer';
import InfoHeader from '@/components/InfoHeader';
import Meta from '@/components/Meta';
import synthesisController from '@/services/synthesis';
import {
  isSynthesisAudioEmpty,
  isSynthesisTextEmptyString, // useSynthesisAudio,
  useSynthesisDialect,
  useSynthesisText,
} from '@/store/synthesis';

function SpeechSynthesis() {
  const { synthesisText, setSynthesisText } = useSynthesisText();
  const { synthesisDialect, setSynthesisDialect } = useSynthesisDialect();
  // const { synthesisAudio, setSynthesisAudio } = useSynthesisAudio();

  const emptyString = useRecoilValue(isSynthesisTextEmptyString);

  const submitSynthesis = () => {
    synthesisController(synthesisText);
  };

  return (
    <>
      <Meta title="speech synthesis" />
      <InfoHeader title="Speech Synthesis" />
      <Box maxWidth="sm" px={1} component="form" noValidate autoComplete="off">
        <TextField
          sx={{ backgroundColor: 'white', mt: 0 }}
          onChange={(e) => setSynthesisText(e.target.value)}
          id="outlined-multiline-static"
          label="Scríobh anseo"
          multiline
          rows={4}
          value={synthesisText}
          autoFocus
          fullWidth
        />
        <Typography align="center" p={{ sm: 4, xs: 2 }}>
          <Button
            disabled={emptyString}
            variant="contained"
            color="primary"
            onClick={submitSynthesis}
          >
            Synthesise
          </Button>
        </Typography>
        {!isSynthesisAudioEmpty && (
          <AbAudioPlayer audioURL="https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg" />
        )}
        <FormControl sx={{ px: 2, justifyContent: 'center' }}>
          <FormLabel id="demo-row-radio-buttons-group-label">Dialect</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={synthesisDialect}
            onChange={(e) => setSynthesisDialect(e.target.value)}
          >
            <FormControlLabel value="Ulster" control={<Radio />} label="Ulster" />
            <FormControlLabel value="Connaught" control={<Radio />} label="Connaught" />
            <FormControlLabel value="Munster" control={<Radio />} label="Munster" />
          </RadioGroup>
        </FormControl>
        <AbAccordion accordionType="synthesis" />
      </Box>
    </>
  );
}

export default SpeechSynthesis;
