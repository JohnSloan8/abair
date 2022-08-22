import { FC } from 'react';

import { IconButton } from '@mui/material';
import type { SvgIconProps } from '@mui/material/SvgIcon';

import CreateItem from './styles';

interface AbIconButtonProps {
  variation: 'record' | 'stop';
  handleClick: () => void;
  icon: FC<SvgIconProps>;
}

const AbIconButton = ({ variation, handleClick, icon: Icon }: AbIconButtonProps) => {
  const styles = CreateItem();
  const style = styles[variation];

  return (
    <IconButton
      aria-label={variation}
      color="info"
      sx={{
        backgroundColor: style.backgroundColor,
        '&:hover': { backgroundColor: style.backgroundColor },
        m: { sm: style.marginSmall, xs: style.marginXSmall },
      }}
      onClick={handleClick}
    >
      {<Icon fontSize="large" />}
    </IconButton>
  );
};

export default AbIconButton;
