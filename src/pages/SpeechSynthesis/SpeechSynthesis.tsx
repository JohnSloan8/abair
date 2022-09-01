/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';

import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import SpeedIcon from '@mui/icons-material/Speed';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { AbButton } from 'abair-component-library';

import AbAudioPlayer from '@/components/AbAudioPlayer';
import AbGenderChoices from '@/components/AbGenderChoices';
import AbInfoHeader from '@/components/AbInfoHeader';
import AbMap from '@/components/AbMap';
// import AbRadioGroup from '@/components/AbRadioGroup';
import AbTextField from '@/components/AbTextField';
import Meta from '@/components/Meta';
import { CenteredFlexBox } from '@/components/styled';
import getSynthesisMetadata from '@/services/synthesis/metadata';
import {
  isSynthesisAudioEmpty,
  isSynthesisTextEmptyString,
  useSynthesisAudio,
  useSynthesisText,
} from '@/store/synthesis';
import {
  filteredSynthesisVoiceOptionsState,
  synthesisVoiceIndexState,
  synthesisVoiceModel,
  synthesisVoiceSelectedState,
  useSynthesisVoiceIndex,
  useSynthesisVoiceOptions,
} from '@/store/synthesis/voiceOptions';

import getSynthesis from '../../services/synthesis';

function SpeechSynthesis() {
  const { synthesisText } = useSynthesisText();
  const { synthesisAudio, setSynthesisAudio } = useSynthesisAudio();
  const { synthesisVoiceIndex, setSynthesisVoiceIndex } = useSynthesisVoiceIndex();
  const { synthesisVoiceOptions, setSynthesisVoiceOptions } = useSynthesisVoiceOptions();
  const emptyString = useRecoilValue(isSynthesisTextEmptyString);
  const emptyAudio = useRecoilValue(isSynthesisAudioEmpty);
  const filteredSynthesisVoiceOptions = useRecoilValue(filteredSynthesisVoiceOptionsState);
  const synthesisVoiceSelected = useRecoilValue(synthesisVoiceSelectedState);
  const resetSynthesisVoiceIndex = useResetRecoilState(synthesisVoiceIndexState);

  useEffect(() => {
    getSynthesisMetadata()
      .then((res) => {
        res.map((v: synthesisVoiceModel) => {
          v.speed = 1;
          v.pitch = 1;
          v.speedRange = [0.5, 1.5];
          v.pitchRange = [0.5, 1.5];
        });
        setSynthesisVoiceOptions(res);
      })
      .catch((error) => {
        alert('error:' + error);
      });
  }, []);

  useEffect(() => {
    console.log('audio:', synthesisAudio);
  }, [emptyAudio]);

  useEffect(() => {
    console.log('filteredSynthesisVoiceOptions:', filteredSynthesisVoiceOptions);
  }, [filteredSynthesisVoiceOptions]);

  const handleSynthesisRequest = () => {
    getSynthesis(synthesisText, synthesisVoiceSelected, setSynthesisAudio);
  };

  const toggleVoice = (voice: synthesisVoiceModel) => {
    if (synthesisVoiceSelected === voice) {
      resetSynthesisVoiceIndex();
    } else {
      setSynthesisVoiceIndex(
        synthesisVoiceOptions.findIndex((v: synthesisVoiceModel) => v === voice),
      );
    }
  };
  function replaceItemAtIndex(
    arr: synthesisVoiceModel[],
    index: number,
    newValue: synthesisVoiceModel,
  ) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }
  const handleSliderChange = (event: Event, control: string) => {
    // setSynthesisVoiceOptions((synthesisVoiceOptions[synthesisVoiceIndex]) => ({ ...synthesisVoice, speed: event.target.value }));
    let newSynthesisVoiceOptions: synthesisVoiceModel[];
    if (control === 'speed') {
      newSynthesisVoiceOptions = replaceItemAtIndex(synthesisVoiceOptions, synthesisVoiceIndex, {
        ...synthesisVoiceSelected,
        speed: event.target.value,
      });
      setSynthesisVoiceOptions(newSynthesisVoiceOptions);
    } else if (control === 'pitch') {
      newSynthesisVoiceOptions = replaceItemAtIndex(synthesisVoiceOptions, synthesisVoiceIndex, {
        ...synthesisVoiceSelected,
        pitch: event.target.value,
      });
      setSynthesisVoiceOptions(newSynthesisVoiceOptions);
    }
  };

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

              <Stack
                spacing={1}
                py={{ sm: 2, xs: 0.5 }}
                sx={{ width: '80%' }}
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <SpeedIcon sx={{ color: 'secondary.main' }} />
                <Slider
                  aria-label="Speed"
                  valueLabelDisplay="auto"
                  defaultValue={1}
                  min={synthesisVoiceSelected.speedRange[0]}
                  step={0.1}
                  max={synthesisVoiceSelected.speedRange[1]}
                  sx={{ color: 'secondary.main' }}
                  onChange={(e) => handleSliderChange(e, 'speed')}
                />
              </Stack>

              <Stack
                spacing={1}
                py={{ sm: 2, xs: 0.5 }}
                sx={{ width: '80%' }}
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <GraphicEqIcon sx={{ color: 'secondary.main' }} />
                <Slider
                  aria-label="Pitch"
                  valueLabelDisplay="auto"
                  defaultValue={1}
                  min={synthesisVoiceSelected.pitchRange[0]}
                  step={0.1}
                  max={synthesisVoiceSelected.pitchRange[1]}
                  sx={{ color: 'secondary.main' }}
                  onChange={(e) => handleSliderChange(e, 'pitch')}
                />
              </Stack>
            </Grid>
          </Grid>
        </CenteredFlexBox>
        <CenteredFlexBox p={1} mb={{ sm: 2, xs: 1 }}>
          <Stack direction="row" spacing={{ sm: 1, xs: 0.25 }} sx={{ flexWrap: 'wrap' }}>
            {filteredSynthesisVoiceOptions.map((k: synthesisVoiceModel, i) => (
              <AbButton
                label={k.name}
                onClick={() => toggleVoice(k)}
                key={i}
                selected={k === synthesisVoiceSelected ? true : false}
                variation="voice"
              />
            ))}
          </Stack>
        </CenteredFlexBox>
        <Box px={1} component="form" noValidate autoComplete="off">
          <AbTextField variation="synthesis" />
          <Typography align="center" p={{ sm: 4, xs: 2 }}>
            <Button
              disabled={emptyString}
              variant="contained"
              color="primary"
              onClick={() => handleSynthesisRequest()}
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
