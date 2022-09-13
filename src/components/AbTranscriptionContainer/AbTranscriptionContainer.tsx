import Box from '@mui/material/Box';

import AbTranscription from '@/components/AbTranscription';
import AbTranscriptionEditable from '@/components/AbTranscriptionEditable';
import { transcriptionModel } from '@/models/transcription';
import { useCorrections } from '@/store/transcriptions';

import AbTranscriptionCorrect from '../AbTranscriptionCorrect';

interface AbTranscriptionContainerProps {
  transcription: transcriptionModel;
}

const AbTranscriptionContainer = ({ transcription }: AbTranscriptionContainerProps) => {
  const { corrections, setCorrections } = useCorrections();
  // const [thisTranscriptionCorrections, setThisTranscriptionCorrections] = useState([])

  // useEffect(() => {
  //   setThisTranscriptionCorrections()
  // }, [])

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
          corrections={corrections.filter((c) => c.transcription_id === transcription.id)}
          setCorrections={setCorrections}
        />
      )}
    </Box>
  );
};

export default AbTranscriptionContainer;
