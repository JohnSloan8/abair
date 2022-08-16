import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import AbRadioGroup from '@/components/AbRadioGroup';

import CreateItem from './styles';
import { AccordionItem } from './types';

interface AbAccordionProps {
  variation: string;
}

const AbAccordion = ({ variation = 'synthesis' }: AbAccordionProps) => {
  const styles: { [name: string]: AccordionItem } = CreateItem();
  const style = styles[variation];

  const toggleSynthesisAccordion = () => {
    style.setter(!style.getter);
  };

  return (
    <Accordion
      onChange={toggleSynthesisAccordion}
      expanded={style.getter}
      disableGutters
      elevation={0}
      sx={{
        backgroundColor: 'background.default',
        '&:before': { display: 'none' },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ width: '200px' }}
      >
        <Typography>{style.title}</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Grid container direction="column" alignItems="flex-start">
          {style.items.map((item) => (
            <Box key={item.name}>
              <AbRadioGroup
                name={item.name}
                getter={item.getter}
                setter={item.setter}
                options={item.options}
              />
            </Box>
          ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default AbAccordion;
