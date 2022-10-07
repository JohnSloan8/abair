import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { AbAccordionProps } from './types';

const AbAccordion = ({ label, children }: AbAccordionProps) => {
  return (
    <Accordion
    // onChange={handleChange}
    // disableGutters
    // elevation={0}
    // sx={{
    //   backgroundColor: 'background.paper',
    //   '&:before': { display: 'none' },
    // }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        // sx={{ width: '200px' }}
      >
        <Typography>{label}</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Grid container direction="column" alignItems="flex-start">
          {children}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default AbAccordion;
