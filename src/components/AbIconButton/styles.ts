// import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
// import StopIcon from '@mui/icons-material/Stop';
import { IconButtonItem } from './types';

const CreateItem = () => {
  const styles: { [name: string]: IconButtonItem } = {
    record: {
      backgroundColor: 'background.default',
      backgroundHoverColor: 'secondary.main',
      hoverColor: 'background.default',
      iconColour: 'secondary.main',
      marginSmall: 2,
      marginXSmall: 1,
      border: 1,
      fontSize: 'large',
    },
    stop: {
      backgroundColor: 'background.default',
      backgroundHoverColor: 'warning.main',
      hoverColor: 'background.default',
      iconColour: 'warning.main',
      marginSmall: 2,
      marginXSmall: 1,
      border: 1,
      fontSize: 'large',
    },
    correct: {
      backgroundColor: 'primary.main',
      backgroundHoverColor: 'primary.dark',
      hoverColor: 'background.default',
      iconColour: 'background.default',
      marginSmall: 1,
      marginXSmall: 1,
      border: 0,
      fontSize: 'medium',
    },
    incorrect: {
      backgroundColor: 'warning.main',
      backgroundHoverColor: 'warning.dark',
      hoverColor: 'background.default',
      iconColour: 'background.default',
      marginSmall: 1,
      marginXSmall: 1,
      border: 0,
      fontSize: 'medium',
    },
    genderUnselected: {
      backgroundColor: 'info',
      backgroundHoverColor: 'info',
      hoverColor: 'secondary.dark',
      iconColour: 'secondary.light',
      marginSmall: 1,
      marginXSmall: 1,
      border: 0,
      fontSize: 'large',
    },
    genderHighlighted: {
      backgroundColor: 'info',
      backgroundHoverColor: 'info',
      hoverColor: 'secondary.dark',
      iconColour: 'secondary.main',
      marginSmall: 1,
      marginXSmall: 1,
      border: 0,
      fontSize: 'large',
    },
    genderSelected: {
      backgroundColor: 'info',
      backgroundHoverColor: 'info',
      hoverColor: 'secondary.dark',
      iconColour: 'secondary.dark',
      marginSmall: 1,
      marginXSmall: 1,
      border: 0,
      fontSize: 'large',
    },
  };

  return styles;
};

export default CreateItem;
