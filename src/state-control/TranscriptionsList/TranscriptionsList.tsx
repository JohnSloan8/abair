import Box from '@mui/material/Box';

import { transcriptionModel } from '@/models/transcription';
import TranscriptionListItem from '@/state-control/TranscriptionListItem';
import { useTranscriptions } from '@/store/transcriptions';

const TranscriptionsList = () => {
  const { transcriptions } = useTranscriptions();

  return (
    <Box>
      {transcriptions.map((t: transcriptionModel, i: number) => (
        <Box key={i} m={1} sx={{ position: 'relative' }}>
          {t === undefined ? null : <TranscriptionListItem trans={t} />}
        </Box>
      ))}
    </Box>
  );
};

export default TranscriptionsList;
