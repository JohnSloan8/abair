import { IconButton } from '@mui/material';

import CreateItem from './styles';

interface AbIconButtonProps {
  variation: 'record' | 'stop';
  handleClick: () => void;
}

const AbIconButton = ({ variation, handleClick }: AbIconButtonProps) => {
  const styles = CreateItem();
  const style = styles[variation];

  return (
    <IconButton
      aria-label={variation}
      color="info"
      sx={{
        backgroundColor: style.backgroundColor,
        '&:hover': { backgroundColor: style.backgroundColor },
      }}
      onClick={handleClick}
    >
      {/* /><KeyboardVoiceIcon fontSize="large" /> */}
    </IconButton>
  );
};

export default AbIconButton;
