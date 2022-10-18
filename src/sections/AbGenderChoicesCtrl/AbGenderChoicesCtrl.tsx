import { useEffect } from 'react';

import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import { Box } from '@mui/material';

import AbIconButton from '@/components/AbIconButton';
import { useSynthesisGender } from '@/store/synthesis/voiceOptions';

const AbGenderChoicesCtrl = () => {
  const { synthesisGender, setSynthesisGender } = useSynthesisGender();

  const genders = [
    { name: 'male', icon: MaleIcon },
    { name: 'female', icon: FemaleIcon },
  ];

  const toggleGender = (gender: string) => {
    setSynthesisGender(gender);
  };

  useEffect(() => {
    console.log('gender:', synthesisGender);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [synthesisGender]);

  return (
    <Box my={-2}>
      {genders.map((g) => (
        <AbIconButton
          key={g.name}
          variation={synthesisGender === g.name ? 'genderSelected' : 'genderUnselected'}
          handleClick={() => {
            toggleGender(g.name);
          }}
          icon={g.icon}
        />
      ))}
    </Box>
  );
};

export default AbGenderChoicesCtrl;
