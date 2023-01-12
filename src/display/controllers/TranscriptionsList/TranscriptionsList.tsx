import Box from '@mui/material/Box';

import TranscriptionListItem from '@/display/controllers/TranscriptionListItem';
import { useTranscriptions } from '@/store/transcriptions';

import { Database } from '../../../../types/supabase';

const TranscriptionsList = () => {
  const { transcriptions } = useTranscriptions();

  return (
    <Box>
      {transcriptions.map((t: Database['public']['Tables']['transcriptions']['Row'], i: number) => (
        <Box key={i} m={1} sx={{ position: 'relative' }}>
          {t === undefined ? null : <TranscriptionListItem trans={t} />}
        </Box>
      ))}
    </Box>
  );
};

export default TranscriptionsList;
