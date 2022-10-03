import { useEffect } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';

import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import { Grid } from '@mui/material';

import {
  synthesisVoiceIndexState,
  synthesisVoiceSelected,
  useSynthesisGender,
} from '@/store/synthesis/voiceOptions';

import AbIconButton from '../AbIconButton';

const AbGenderChoices = () => {
  const synthesisVoiceSelectedValue = useRecoilValue(synthesisVoiceSelected);
  const { synthesisGender, setSynthesisGender } = useSynthesisGender();
  const resetSynthesisVoiceIndex = useResetRecoilState(synthesisVoiceIndexState);

  const genders = [
    { name: 'male', icon: MaleIcon },
    { name: 'female', icon: FemaleIcon },
  ];
  const toggleGender = (gender: string) => {
    console.log('toggling gender:', gender);
    if (gender === synthesisGender) {
      setSynthesisGender('all');
    } else {
      setSynthesisGender(gender);
      resetSynthesisVoiceIndex();
    }
  };

  useEffect(() => {
    console.log('synthesisGender:', synthesisGender);
  }, [synthesisGender]);

  return (
    <Grid container direction="row" id="genderGridContainer" justifyContent="center">
      {genders.map((g) => (
        // <Grid item xs={3} key={g.name} direction="row" justifyContent="center">
        <AbIconButton
          key={g.name}
          variation={
            synthesisGender === g.name
              ? 'genderSelected'
              : synthesisVoiceSelectedValue.gender === g.name
              ? 'genderHighlighted'
              : 'genderUnselected'
          }
          handleClick={() => {
            toggleGender(g.name);
          }}
          icon={g.icon}
        />
        // </Grid>
      ))}
    </Grid>
  );
};

export default AbGenderChoices;
