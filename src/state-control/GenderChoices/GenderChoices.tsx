import { useEffect } from 'react';

import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import { Box } from '@mui/material';

import { AbIconButton } from 'abair-components';

import { useSynthesisGender } from '@/store/synthesis/voiceOptions';

const GenderChoices = () => {
  const { synthesisGender, setSynthesisGender } = useSynthesisGender();

  const genders = [
    { name: 'male', icon: MaleIcon },
    { name: 'female', icon: FemaleIcon },
  ];

  useEffect(() => {
    console.log('gender:', synthesisGender);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [synthesisGender]);

  return (
    <Box>
      {genders.map((g) => (
        <AbIconButton
          key={g.name}
          selected={g.name === synthesisGender ? true : false}
          color="secondary"
          onClick={() => {
            setSynthesisGender(g.name);
          }}
          icon={g.icon}
        />
      ))}
    </Box>
  );
};

export default GenderChoices;
