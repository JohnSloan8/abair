// import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
// import StopIcon from '@mui/icons-material/Stop';
import { IconButtonItem } from './types';

const CreateItem = () => {
  const styles: { [name: string]: IconButtonItem } = {
    record: {
      backgroundColor: 'primary.main',
      backgroundHoverColor: 'primary.dark',
      marginSmall: 4,
      marginXSmall: 2,
    },
    stop: {
      backgroundColor: 'warning.main',
      backgroundHoverColor: 'warning.dark',
      marginSmall: 4,
      marginXSmall: 2,
    },
  };

  return styles;
};

export default CreateItem;
