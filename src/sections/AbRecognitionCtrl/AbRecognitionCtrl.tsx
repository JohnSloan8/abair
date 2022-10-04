import Box from '@mui/material/Box';

import AbTextField from '@/components/AbTextField';
import { useEditableTranscriptionText } from '@/store/transcriptions';

interface AbRecognitionCtrlProps {
  children: React.ReactNode;
}

const AbRecognitionCtrl = ({ children }: AbRecognitionCtrlProps) => {
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

      <Box sx={{ width: '100%', height: 50 }}>{children}</Box>
    </Box>
  );
};

export default AbRecognitionCtrl;
