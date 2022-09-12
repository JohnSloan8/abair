import Grid from '@mui/material/Grid';

import AbTranscriptionWord from '@/components/AbTranscriptionWord';

interface AbTranscriptionEditableProps {
  text: string;
}

const AbTranscriptionEditable = ({ text }: AbTranscriptionEditableProps) => {
  return (
    <Grid container direction="row">
      {text.split(' ').map((word, i) => (
        <Grid key={i} item>
          <AbTranscriptionWord word={word} index={i} />
        </Grid>
      ))}
    </Grid>
  );
};

export default AbTranscriptionEditable;
