import AbTextField from '@/components/AbTextField';
import { useEditableTranscriptionText } from '@/store/transcriptions';

interface AbRecognitionCtrlTextFieldCtrlProps {
  rows: number;
}

const AbRecognitionCtrlTextFieldCtrl = ({ rows = 4 }: AbRecognitionCtrlTextFieldCtrlProps) => {
  const { editableTranscriptionText, setEditableTranscriptionText } =
    useEditableTranscriptionText();

  return (
    <AbTextField
      key={'recognition'}
      label=""
      rows={rows}
      disabled={false}
      autoFocus={false}
      getter={editableTranscriptionText}
      onChangeHandler={(text) => {
        setEditableTranscriptionText(text);
      }}
    />
  );
};

export default AbRecognitionCtrlTextFieldCtrl;
