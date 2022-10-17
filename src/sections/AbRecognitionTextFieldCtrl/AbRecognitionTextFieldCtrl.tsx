import Box from '@mui/material/Box';

import AbTextField from '@/components/AbTextField';
import AbRecognitionVisualisationCtrl from '@/sections/AbRecognitionVisualisationCtrl';
import { useEditableTranscriptionText } from '@/store/transcriptions';

interface AbRecognitionCtrlTextFieldCtrlProps {
  rows: number;
}

const AbRecognitionCtrlTextFieldCtrl = ({ rows = 4 }: AbRecognitionCtrlTextFieldCtrlProps) => {
  const { editableTranscriptionText, setEditableTranscriptionText } =
    useEditableTranscriptionText();

  return (
    <Box sx={{ position: 'relative' }}>
      <Box sx={{ position: 'relative', zIndex: 10, top: 0 }}>
        <AbRecognitionVisualisationCtrl />
      </Box>

      <AbTextField
        key={'recognition'}
        label=""
        rows={rows}
        disabled={false}
        autoFocus={false}
        getter={typeof editableTranscriptionText === 'string' ? editableTranscriptionText : ''}
        onChangeHandler={(text) => {
          setEditableTranscriptionText(text);
        }}
      />
    </Box>
  );
};

export default AbRecognitionCtrlTextFieldCtrl;
