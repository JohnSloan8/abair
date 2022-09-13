import { SetterOrUpdater } from 'recoil';

import Box from '@mui/material/Box';

import AbTranscription from '@/components/AbTranscription';
import AbTranscriptionEditable from '@/components/AbTranscriptionEditable';
import { transcriptionModel } from '@/models/transcription';

import AbTranscriptionCorrect from '../AbTranscriptionCorrect';

interface AbTranscriptionContainerProps {
  transcription: transcriptionModel;
  setTranscriptions: SetterOrUpdater<transcriptionModel[]>;
}

const AbTranscriptionContainer = ({
  transcription,
  setTranscriptions,
}: AbTranscriptionContainerProps) => {
  return (
    <Box
      m={1}
      p={2}
      border={1}
      sx={{
        borderColor:
          transcription.correct === null ? '#00f' : transcription.correct ? '#0f0' : '#f00',
      }}
    >
      {transcription.correct === null ? (
        <AbTranscription transcription={transcription} />
      ) : transcription.correct ? (
        <AbTranscriptionCorrect transcription={transcription} />
      ) : (
        <AbTranscriptionEditable
          transcription={transcription}
          setTranscriptions={setTranscriptions}
        />
      )}
    </Box>
  );
};

export default AbTranscriptionContainer;
