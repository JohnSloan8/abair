// import { useState } from 'react';
import { useEffect, useState } from 'react';

import Typography from '@mui/material/Typography';

import { correctionModel } from '@/models/transcription';

interface AbTranscriptionWordProps {
  word: string;
  index: number;
  corrections: correctionModel[];
  handleClick: () => void;
}

const AbTranscriptionWord = ({
  word,
  index,
  corrections,
  handleClick,
}: AbTranscriptionWordProps) => {
  const [wordSelected, setWordSelected] = useState(false);

  const isWordSelected = () => {
    setWordSelected(false);
    corrections.map((c: correctionModel) => {
      if (index >= c.start && index <= c.end) {
        setWordSelected(true);
      }
    });
  };

  useEffect(() => {
    isWordSelected();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [corrections]);

  return (
    <Typography
      component="button"
      id={index.toString()}
      variant="body1"
      p={1}
      sx={{
        border: 1,
        borderColor: '#eee',
        backgroundColor: wordSelected ? 'warning.light' : '#fff',
        '&:hover': { borderColor: 'warning.main', cursor: 'pointer' },
      }}
      onClick={handleClick}
    >
      {word}
    </Typography>
  );
};

export default AbTranscriptionWord;
