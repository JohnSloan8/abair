// import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
// import StopIcon from '@mui/icons-material/Stop';
import { IconButtonItem } from './types';

const CreateItem = () => {
  const styles: { [name: string]: IconButtonItem } = {
    record: {
      backgroundColor: 'primary.main',
      backgroundHoverColor: 'primary.dark',
      iconColour: 'info',
      marginSmall: 4,
      marginXSmall: 2,
    },
    stop: {
      backgroundColor: 'warning.main',
      backgroundHoverColor: 'warning.dark',
      iconColour: 'info',
      marginSmall: 4,
      marginXSmall: 2,
    },
    genderUnselected: {
      backgroundColor: 'info',
      backgroundHoverColor: 'info',
      iconColour: 'secondary.light',
      marginSmall: 1,
      marginXSmall: 1,
    },
    genderHighlighted: {
      backgroundColor: 'info',
      backgroundHoverColor: 'info',
      iconColour: 'secondary.main',
      marginSmall: 1,
      marginXSmall: 1,
    },
    genderSelected: {
      backgroundColor: 'info',
      backgroundHoverColor: 'info',
      iconColour: 'secondary.dark',
      marginSmall: 1,
      marginXSmall: 1,
    },
  };

  return styles;
};

export default CreateItem;
