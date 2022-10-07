import Box from '@mui/material/Box';

import AbTextField from '@/components/AbTextField';
import AbTranscriptionListItem from '@/components/AbTranscriptionListItem';
import { transcriptionModel } from '@/models/transcription';
import AbRecognitionButtonsCtrl from '@/sections/AbRecognitionButtonsCtrl';
import {
  useEditableTranscriptionText,
  useTranscription,
  useTranscriptions,
} from '@/store/transcriptions';

const AbTranscriptionsListCtrl = () => {
  const { transcriptions } = useTranscriptions();
  const { transcription, setTranscription } = useTranscription();
  const { editableTranscriptionText, setEditableTranscriptionText } =
    useEditableTranscriptionText();
  const handleClick = (t: transcriptionModel) => {
    setTranscription(t);
  };

  return (
    <Box>
      {transcriptions.map((t: transcriptionModel, i: number) => (
        <Box key={i} m={1}>
          {transcription === undefined ? (
            <AbTranscriptionListItem
              selected={false}
              correction={t.correction}
              transcriptions={t.recognition_response.map(({ utterance }) => utterance)}
              handleClick={() => handleClick(t)}
              key={i}
            />
          ) : t.id === transcription.id ? (
            <AbTranscriptionListItem
              selected={true}
              correction={t.correction}
              transcriptions={t.recognition_response.map(({ utterance }) => utterance)}
              handleClick={() => handleClick(t)}
              key={i}
              textbox={
                <AbTextField
                  key={'recognition'}
                  label=""
                  rows={2}
                  disabled={false}
                  autoFocus={false}
                  getter={editableTranscriptionText}
                  onChangeHandler={(text) => {
                    setEditableTranscriptionText(text);
                  }}
                />
              }
              transcriptionButtons={<AbRecognitionButtonsCtrl showRecord={false} />}
            />
          ) : (
            <AbTranscriptionListItem
              selected={false}
              correction={t.correction}
              transcriptions={t.recognition_response.map(({ utterance }) => utterance)}
              handleClick={() => handleClick(t)}
              key={i}
            />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default AbTranscriptionsListCtrl;
