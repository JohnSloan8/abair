import { useState } from 'react';

import Typography from '@mui/material/Typography';

interface AbTranscriptionWordProps {
  word: string;
  index: number;
}

const AbTranscriptionWord = ({ word, index }: AbTranscriptionWordProps) => {
  const [selected, setSelected] = useState(false);

  const handleWordClick = () => {
    console.log('word clicked');
    setSelected(!selected);
  };

  return (
    <Typography
      component="button"
      id={index.toString()}
      variant="body1"
      p={1}
      sx={{
        border: 1,
        borderColor: '#eee',
        backgroundColor: selected ? 'warning.light' : '#fff',
        '&:hover': { borderColor: 'warning.main', cursor: 'pointer' },
      }}
      onClick={() => handleWordClick(index)}
    >
      {word}
    </Typography>
  );
};

export default AbTranscriptionWord;
