import Typography from '@mui/material/Typography';

interface AbTranscriptionProps {
  text: string;
}

const AbTranscription = ({ text }: AbTranscriptionProps) => {
  return <Typography variant="body1">{text}</Typography>;
};

export default AbTranscription;
