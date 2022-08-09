import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';

import {
  useSynthesisAccordion,
  useSynthesisGender,
  useSynthesisMode,
  useSynthesisPitch,
  useSynthesisSpeed,
} from '@/store/synthesis';

// interface AccordionDropdownProps {

// }

const AccordionDropdown = () => {
  const { synthesisGender, setSynthesisGender } = useSynthesisGender();
  const { synthesisMode, setSynthesisMode } = useSynthesisMode();
  const { synthesisSpeed, setSynthesisSpeed } = useSynthesisSpeed();
  const { synthesisPitch, setSynthesisPitch } = useSynthesisPitch();
  const { synthesisAccordion, setSynthesisAccordion } = useSynthesisAccordion();

  const toggleAccordion = () => {
    setSynthesisAccordion(!synthesisAccordion);
  };

  return (
    <Accordion
      onChange={toggleAccordion}
      expanded={synthesisAccordion}
      disableGutters
      elevation={0}
      sx={{
        backgroundColor: 'background.default',
        borderTop: '0px solid black',
        '&:before': { display: 'none' },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ width: '200px' }}
      >
        <Typography>Advanced Options</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Grid container direction="column" alignItems="flex-start">
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={synthesisGender}
              onChange={(e) => setSynthesisGender(e.target.value)}
            >
              <FormControlLabel value="male" control={<Radio />} label="male" />
              <FormControlLabel value="female" control={<Radio />} label="female" />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Speed</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={synthesisSpeed}
              onChange={(e) => setSynthesisSpeed(e.target.value)}
            >
              <FormControlLabel value="slow" control={<Radio />} label="slow" />
              <FormControlLabel value="normal" control={<Radio />} label="normal" />
              <FormControlLabel value="fast" control={<Radio />} label="fast" />
              <FormControlLabel value="very fast" control={<Radio />} label="very fast" />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Speed</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={synthesisPitch}
              onChange={(e) => setSynthesisPitch(e.target.value)}
            >
              <FormControlLabel value="very high" control={<Radio />} label="very high" />
              <FormControlLabel value="high" control={<Radio />} label="high" />
              <FormControlLabel value="normal" control={<Radio />} label="normal" />
              <FormControlLabel value="low" control={<Radio />} label="low" />
              <FormControlLabel value="very low" control={<Radio />} label="very low" />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Mode</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={synthesisMode}
              onChange={(e) => setSynthesisMode(e.target.value)}
            >
              <FormControlLabel value="DNN" control={<Radio />} label="DNN" />
              <FormControlLabel value="HTS" control={<Radio />} label="HTS" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionDropdown;
