// import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
// import StopIcon from '@mui/icons-material/Stop';
import { IconButtonItem } from './types';

const CreateItem = () => {
  const styles: { [name: string]: IconButtonItem } = {
    record: {
      backgroundColor: 'background.default',
      backgroundHoverColor: 'secondary.main',
      iconColour: 'secondary.main',
      marginSmall: 2,
      marginXSmall: 1,
    },
    stop: {
      backgroundColor: 'background.default',
      backgroundHoverColor: 'warning.main',
      iconColour: 'warning.main',
      marginSmall: 2,
      marginXSmall: 1,
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
