import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import AbIconButton from '@/components/AbIconButton';
import { transcriptionModel } from '@/models/transcription';
import { postCorrectnessJudgement } from '@/services/supabase/transcriptions';
import { useTranscriptions } from '@/store/transcriptions';
import { updateTranscriptionsList } from '@/store/transcriptions/utils';

interface AbTranscriptionProps {
  transcription: transcriptionModel;
}

const AbTranscription = ({ transcription }: AbTranscriptionProps) => {
  const { transcriptions, setTranscriptions } = useTranscriptions();

  const handleCorrection = (correct: boolean) => {
    postCorrectnessJudgement(transcription, correct).then((res) => {
      res
        ? updateTranscriptionsList(correct, transcription, transcriptions, setTranscriptions)
        : alert('postCorrectnessJudgement failed');
    });
  };
  return (
    <Box>
      <Typography variant="body1">{transcription.text}</Typography>
      <Grid container direction="row" justifyContent="space-evenly" alignItems="center" mt={1}>
        <Grid item>
          <AbIconButton
            variation="incorrect"
            handleClick={() => {
              handleCorrection(false);
            }}
            icon={CloseIcon}
          />
        </Grid>
        <Grid item>
          <AbIconButton
            variation="correct"
            handleClick={() => {
              handleCorrection(true);
            }}
            icon={DoneIcon}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AbTranscription;
