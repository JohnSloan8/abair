import { FC } from 'react';

import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import type { SvgIconProps } from '@mui/material/SvgIcon';

interface AbSliderProps {
  handleSliderChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: FC<SvgIconProps>;
  value: number;
  control: string;
  min: number;
  max: number;
  step: number;
  color: string;
}

const AbSlider = ({
  min,
  max,
  value,
  step,
  handleSliderChange,
  icon: Icon,
  color,
}: AbSliderProps) => {
  return (
    <Stack
      spacing={2}
      py={{ sm: 2, xs: 0.5 }}
      sx={{ width: '100%' }}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Icon sx={{ color: color }} />
      <Slider
        aria-label="Speed"
        valueLabelDisplay="auto"
        defaultValue={1}
        value={value}
        min={min}
        step={step}
        max={max}
        sx={{ color: color }}
        onChange={(e) => handleSliderChange(e)}
      />
    </Stack>
  );
};

export default AbSlider;
