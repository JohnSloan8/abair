/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

// import GraphicEqIcon from '@mui/icons-material/GraphicEq';
// import SpeedIcon from '@mui/icons-material/Speed';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { AbButton } from 'abair-component-library';

import AbAudioPlayer from '@/components/AbAudioPlayer';
import AbGenderChoices from '@/components/AbGenderChoices';
import AbInfoHeader from '@/components/AbInfoHeader';
import AbMap from '@/components/AbMap';
import AbSlider from '@/components/AbSlider';
import AbTextField from '@/components/AbTextField';
import Meta from '@/components/Meta';
import { CenteredFlexBox } from '@/components/styled';
import getSynthesis from '@/services/abair/synthesis';
import getSynthesisMetadata from '@/services/abair/synthesis/metadata';
import {
  isSynthesisAudioEmpty,
  isSynthesisTextEmptyString,
  useSynthesisAudio,
  useSynthesisText,
} from '@/store/synthesis';
import {
  filteredSynthesisVoiceOptionsState,
  synthesisVoiceModel,
  synthesisVoiceSelectedState,
  useSynthesisPitch,
  useSynthesisSpeed,
  useSynthesisVoiceIndex,
  useSynthesisVoiceOptions,
} from '@/store/synthesis/voiceOptions';

function SpeechSynthesis() {
  const { synthesisText } = useSynthesisText();
  const { synthesisAudio, setSynthesisAudio } = useSynthesisAudio();
  const { synthesisPitch, setSynthesisPitch } = useSynthesisPitch();
  const { synthesisSpeed, setSynthesisSpeed } = useSynthesisSpeed();

  const { synthesisVoiceOptions, setSynthesisVoiceOptions } = useSynthesisVoiceOptions();
  const { synthesisVoiceIndex, setSynthesisVoiceIndex } = useSynthesisVoiceIndex();
  const emptyString = useRecoilValue(isSynthesisTextEmptyString);
  const emptyAudio = useRecoilValue(isSynthesisAudioEmpty);
  const filteredSynthesisVoiceOptions = useRecoilValue(filteredSynthesisVoiceOptionsState);
  const synthesisVoiceSelected = useRecoilValue(synthesisVoiceSelectedState);

  useEffect(() => {
    synthesisVoiceOptions.length === 0 ? getSynthesisMetadata(setSynthesisVoiceOptions) : null;
  }, []);

  useEffect(() => {
    console.log('audio:', synthesisAudio);
  }, [emptyAudio]);

  return (
    <CenteredFlexBox>
      <Box sx={{ maxWidth: 'sm', width: '100%' }}>
        <Meta title="speech synthesis" />
        <AbInfoHeader title="Speech Synthesis" />
        <CenteredFlexBox m={2}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              <AbMap />
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={6}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <AbGenderChoices />

              <AbSlider
                min={synthesisVoiceSelected.speedRange[0]}
                value={synthesisSpeed}
                max={synthesisVoiceSelected.speedRange[1]}
                handleSliderChange={(e) =>
                  setSynthesisSpeed(parseFloat((e.target as HTMLInputElement).value))
                }
                step={0.1}
                // icon={SpeedIcon}
                control="speed"
                color="secondary.main"
              />

              <AbSlider
                min={synthesisVoiceSelected.pitchRange[0]}
                value={synthesisPitch}
                max={synthesisVoiceSelected.pitchRange[1]}
                handleSliderChange={(e) =>
                  setSynthesisPitch(parseFloat((e.target as HTMLInputElement).value))
                }
                step={0.1}
                // icon={GraphicEqIcon}
                control="pitch"
                color="secondary.main"
              />
            </Grid>
          </Grid>
        </CenteredFlexBox>
        <Stack
          direction="row"
          spacing={{ sm: 1, xs: 0.25 }}
          sx={{ flexWrap: 'wrap' }}
          justifyContent="center"
          mb={{ sm: 2, xs: 1 }}
        >
          {filteredSynthesisVoiceOptions.map((k: synthesisVoiceModel, i: number) => (
            <AbButton
              label={k.name}
              onClick={() =>
                synthesisVoiceIndex === i
                  ? setSynthesisVoiceIndex(-1)
                  : setSynthesisVoiceIndex(synthesisVoiceOptions.indexOf(k))
              }
              key={i}
              selected={k === synthesisVoiceSelected ? true : false}
              variation="voice"
              color={''}
            />
          ))}
        </Stack>
        <Box px={1} component="form" noValidate autoComplete="off">
          <AbTextField variation="synthesis" />
          <Typography align="center" p={{ sm: 4, xs: 2 }}>
            <Button
              disabled={emptyString}
              variant="contained"
              color="primary"
              onClick={() => getSynthesis(synthesisText, synthesisVoiceSelected, setSynthesisAudio)}
            >
              Synthesise
            </Button>
          </Typography>
          {!emptyAudio && (
            <CenteredFlexBox>
              <AbAudioPlayer audioURL={synthesisAudio} />
            </CenteredFlexBox>
          )}
        </Box>
      </Box>
    </CenteredFlexBox>
  );
}

export default SpeechSynthesis;
