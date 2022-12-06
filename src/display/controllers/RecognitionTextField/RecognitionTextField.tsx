// import AbTextField from '@/components/AbTextField';
import { AbTextField } from 'abair-components';

import { useEditableTranscriptionText } from '@/store/transcriptions';

interface RecognitionTextFieldProps {
  rows: number;
}

const RecognitionTextField = ({ rows = 4 }: RecognitionTextFieldProps) => {
  const { editableTranscriptionText, setEditableTranscriptionText } =
    useEditableTranscriptionText();

  return (
    <AbTextField
      key={'recognition'}
      label=""
      rows={rows}
      disabled={false}
      autoFocus={false}
      value={typeof editableTranscriptionText === 'string' ? editableTranscriptionText : ''}
      onChange={(text) => {
        setEditableTranscriptionText(text);
      }}
    />
  );
};

export default RecognitionTextField;
