import { useRecoilValue } from 'recoil';

import SaveIcon from '@mui/icons-material/Save';
import Box from '@mui/material/Box';

import { AbIconButton } from 'abair-components';

import { patchTranscription } from '@/services/supabase/transcriptions';
import { useAwaitingTranscription } from '@/store/recognition';
import {
  editableTranscriptionTextEdited,
  useEditableTranscriptionText,
  useTranscription,
} from '@/store/transcriptions';

const AbRecognitionCorrectionCtrl = () => {
  const { awaitingTranscription } = useAwaitingTranscription();
  const { editableTranscriptionText } = useEditableTranscriptionText();
  const editableTranscriptionEditedValue = useRecoilValue(editableTranscriptionTextEdited);
  const { transcription, setTranscription } = useTranscription();

  const saveEditableTranscription = () => {
    console.log('in editable transcription');
    if (
      transcription !== undefined &&
      typeof transcription.id === 'number' &&
      typeof editableTranscriptionText === 'string'
    ) {
      patchTranscription(transcription.id, editableTranscriptionText, true).then((res) => {
        res
          ? setTranscription({
              ...transcription,
              correction: res.correction,
              corrected: res.corrected,
            })
          : alert('postCorrection failed');
      });
    } else {
      console.log("transcription is undefined or id isn't number");
    }
  };

  return (
    <Box
      sx={{
        visibility:
          !editableTranscriptionEditedValue || awaitingTranscription ? 'hidden' : 'visible',
      }}
    >
      <AbIconButton
        color="warning"
        onClick={() => {
          saveEditableTranscription();
        }}
        icon={SaveIcon}
      />
    </Box>
  );
};

export default AbRecognitionCorrectionCtrl;
