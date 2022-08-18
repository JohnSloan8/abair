import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import styles from './styles';
import { RadioGroupItem } from './types';

const AbRadioGroup = ({
  name = 'synthesis',
  getter = 'male',
  setter = () => null,
}: RadioGroupItem) => {
  const style = styles[name];
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">{name}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={getter}
        onChange={(e) => setter(e.target.value)}
      >
        {style.options.map((o: string, i: number) => (
          <FormControlLabel key={i} value={o} control={<Radio />} label={o} />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default AbRadioGroup;
