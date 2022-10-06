import Box from '@mui/material/Box';

import AbRecognitionHistoryListItem from '@/components/AbRecognitionHistoryListItem';
import { transcriptionModel } from '@/models/transcription';
import { useTranscriptions } from '@/store/transcriptions';

const AbTranscriptionsListCtrl = () => {
  const { transcriptions } = useTranscriptions();

  const handleClick = (id: number | undefined) => {
    console.log('clicked:', id);
  };

  return (
    <Box>
      {transcriptions.map((t: transcriptionModel, i: number) => (
        <Box key={i} m={1}>
          <AbRecognitionHistoryListItem
            transcriptions={t.recognition_response.map(({ utterance }) => utterance)}
            handleClick={() => handleClick(t.id)}
            key={i}
          />
        </Box>
      ))}
    </Box>
  );
};

export default AbTranscriptionsListCtrl;
