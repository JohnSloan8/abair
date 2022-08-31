import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import TransgenderIcon from '@mui/icons-material/Transgender';
import { Grid } from '@mui/material';

import { useSynthesisGenderFilter, useSynthesisVoice } from '@/store/synthesis/voiceOptions';

import AbIconButton from '../AbIconButton';

const AbGenderChoices = () => {
  const { synthesisVoice } = useSynthesisVoice();
  const { synthesisGenderFilter, setSynthesisGenderFilter } = useSynthesisGenderFilter();
  const genders = [
    { name: 'male', icon: MaleIcon },
    { name: 'female', icon: FemaleIcon },
    { name: 'neutral', icon: TransgenderIcon },
    { name: 'reset', icon: RestartAltIcon },
  ];
  const toggleGender = (gender: string) => {
    console.log('toggling gender:', gender);
    setSynthesisGenderFilter(gender);
  };

  return (
    <Grid container direction="row" id="genderGridContainer" justifyContent="center">
      {genders.map((g) => (
        // <Grid item xs={3} key={g.name} direction="row" justifyContent="center">
        <AbIconButton
          key={g.name}
          variation={
            synthesisGenderFilter === g.name
              ? 'genderSelected'
              : synthesisVoice.gender === g.name
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
