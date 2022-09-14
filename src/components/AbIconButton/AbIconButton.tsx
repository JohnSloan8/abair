import { FC } from 'react';

import { IconButton } from '@mui/material';
import type { SvgIconProps } from '@mui/material/SvgIcon';

import CreateItem from './styles';

interface AbIconButtonProps {
  variation:
    | 'record'
    | 'stop'
    | 'genderSelected'
    | 'genderHighlighted'
    | 'genderUnselected'
    | 'correct'
    | 'incorrect'
    | 'editGreen'
    | 'editRed';
  handleClick: () => void;
  icon: FC<SvgIconProps>;
}

const AbIconButton = ({ variation, handleClick, icon: Icon }: AbIconButtonProps) => {
  const styles = CreateItem();
  const style = styles[variation];

  return (
    <IconButton
      aria-label={variation}
      sx={{
        color: style.iconColour,
        border: style.border,
        borderColor: style.backgroundHoverColor,
        backgroundColor: style.backgroundColor,
        '&:hover': { backgroundColor: style.backgroundHoverColor, color: style.hoverColor },
        m: { sm: style.marginSmall, xs: style.marginXSmall },
      }}
      onClick={handleClick}
    >
      {style.fontSize === 'large' ? <Icon fontSize={'large'} /> : <Icon fontSize={'medium'} />}
    </IconButton>
  );
};

export default AbIconButton;
