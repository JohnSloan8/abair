import Box from '@mui/material/Box';

import AbTextField from '@/components/AbTextField';
import AbRecognitionButtonsCtrl from '@/sections/AbRecognitionButtonsCtrl';
import { useEditableTranscriptionText } from '@/store/transcriptions';

const AbRecognitionCtrl = () => {
  const { editableTranscriptionText, setEditableTranscriptionText } =
    useEditableTranscriptionText();

  return (
    <Box
      px={{ sm: 4, xs: 1 }}
      pt={2}
      mx={1}
      sx={{
        width: 550,
        backgroundColor: 'warning.light',
        borderRadius: 3,
        boxShadow: 6,
        position: 'relative',
      }}
    >
      <AbTextField
        key={'recognition'}
        label=""
        rows={4}
        disabled={false}
        autoFocus={false}
        getter={editableTranscriptionText}
        onChangeHandler={(text) => {
          setEditableTranscriptionText(text);
        }}
      />

      <Box sx={{ width: '100%', height: 50 }}>
        <AbRecognitionButtonsCtrl />
      </Box>
    </Box>
  );
};

export default AbRecognitionCtrl;
