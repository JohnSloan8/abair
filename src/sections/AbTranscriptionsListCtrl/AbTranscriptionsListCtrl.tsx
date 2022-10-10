import Box from '@mui/material/Box';

import { transcriptionModel } from '@/models/transcription';
import AbTranscriptionListItemCtrl from '@/sections/AbTranscriptionListItemCtrl';
import { useTranscriptions } from '@/store/transcriptions';

const AbTranscriptionsListCtrl = () => {
  const { transcriptions } = useTranscriptions();

  return (
    <Box>
      {transcriptions.map((t: transcriptionModel, i: number) => (
        <Box key={i} m={1} sx={{ position: 'relative' }}>
          {t === undefined ? null : <AbTranscriptionListItemCtrl trans={t} />}
        </Box>
      ))}
    </Box>
  );
};

export default AbTranscriptionsListCtrl;
