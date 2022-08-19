// import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
// import StopIcon from '@mui/icons-material/Stop';
import { IconButtonItem } from './types';

const CreateItem = () => {
  const styles: { [name: string]: IconButtonItem } = {
    record: {
      backgroundColor: 'primary.main',
      backgroundHoverColor: 'primary.dark',
    },
    stop: {
      backgroundColor: 'warning.main',
      backgroundHoverColor: 'warning.dark',
    },
  };

  return styles;
};

export default CreateItem;
