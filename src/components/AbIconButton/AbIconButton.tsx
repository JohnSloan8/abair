import { FC } from 'react';

import { IconButton } from '@mui/material';
import type { SvgIconProps } from '@mui/material/SvgIcon';

import CreateItem from './styles';

interface AbIconButtonProps {
  variation: 'record' | 'stop' | 'genderSelected' | 'genderHighlighted' | 'genderUnselected';
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
        border: 1,
        borderColor: style.backgroundHoverColor,
        backgroundColor: style.backgroundColor,
        '&:hover': { backgroundColor: style.backgroundHoverColor, color: '#fff' },
        m: { sm: style.marginSmall, xs: style.marginXSmall },
      }}
      onClick={handleClick}
    >
      {<Icon fontSize={'large'} />}
    </IconButton>
  );
};

export default AbIconButton;
