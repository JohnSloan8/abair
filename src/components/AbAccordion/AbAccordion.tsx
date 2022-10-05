// import { FC } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
// import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { AbAccordionProps } from './types';

// import Typography from '@mui/material/Typography';

// import AbRadioGroup from '../AbRadioGroup';

// import AbRadioGroup from '@/components/AbRadioGroup';

// import CreateItem from '../../pages/SpeechSynthesis/styles';
// import { AccordionItem } from './types';

const AbAccordion = ({ label, children }: AbAccordionProps) => {
  // const styles: { [name: string]: AccordionItem } = CreateItem();
  // const style = styles[variation];

  const toggleSynthesisAccordion = () => {
    // style.setter(!style.getter);
  };

  return (
    <Accordion
      onChange={toggleSynthesisAccordion}
      // expanded={style.getter}
      disableGutters
      elevation={0}
      sx={{
        backgroundColor: 'background.paper',
        '&:before': { display: 'none' },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ width: '200px' }}
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
