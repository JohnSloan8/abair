import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import { RadioGroupItem } from './types';

const AbRadioGroup = ({
  name = 'gender',
  getter = 'male',
  setter = () => null,
  options = ['male', 'female'],
}: RadioGroupItem) => {
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
        {options.map((o: string, i: number) => (
          <FormControlLabel key={i} value={o} control={<Radio />} label={o} />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default AbRadioGroup;
