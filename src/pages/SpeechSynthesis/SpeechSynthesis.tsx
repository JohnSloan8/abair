/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { AbButton, AbRadioGroup } from 'abair-component-library';

import AbAccordion from '@/components/AbAccordion';
import AbAudioPlayer from '@/components/AbAudioPlayer';
import AbInfoHeader from '@/components/AbInfoHeader';
// import AbRadioGroup from '@/components/AbRadioGroup';
import AbTextField from '@/components/AbTextField';
import Meta from '@/components/Meta';
import { CenteredFlexBox } from '@/components/styled';
import getSynthesisMetadata from '@/services/synthesis/metadata';
import {
  isSynthesisAudioEmpty,
  isSynthesisTextEmptyString,
  useSynthesisAudio,
  useSynthesisDialect,
  useSynthesisGender,
  useSynthesisMetadata,
  useSynthesisMode, // useSynthesisPitch,
  // useSynthesisSpeed,
  useSynthesisText,
  useVoiceOptions,
  voiceOptionsModel,
} from '@/store/synthesis';

import getSynthesis from '../../services/synthesis';
import { APIVoiceOptionsModel } from './types';

// import UpdateVoiceOptions from './options';
// import { voiceOptionsModel } from './types';

// import { getVoice, pitchNum, speedNum } from './typesgit';

function SpeechSynthesis() {
  const { synthesisText } = useSynthesisText();
  const { synthesisAudio, setSynthesisAudio } = useSynthesisAudio();
  const { synthesisMetadata, setSynthesisMetadata } = useSynthesisMetadata();
  const { voiceOptions, setVoiceOptions } = useVoiceOptions();
  const { synthesisGender, setSynthesisGender } = useSynthesisGender();
  const { synthesisMode, setSynthesisMode } = useSynthesisMode();
  // const { synthesisPitch, setSynthesisPitch } = useSynthesisPitch();
  // const { synthesisSpeed, setSynthesisSpeed } = useSynthesisSpeed();
  const { synthesisDialect, setSynthesisDialect } = useSynthesisDialect();
  const emptyString = useRecoilValue(isSynthesisTextEmptyString);
  const emptyAudio = useRecoilValue(isSynthesisAudioEmpty);

  useEffect(() => {
    getSynthesisMetadata()
      .then((res) => {
        setSynthesisMetadata(res);
      })
      .catch((error) => {
        alert('error:' + error);
      });
  }, []);

  useEffect(() => {
    console.log('synthesisMetadata:', synthesisMetadata);
    const tempGenderArray: string[] = [];
    const tempDialectArray: string[] = [];
    const tempModeArray: string[] = [];
    Object.values(synthesisMetadata).forEach((v) => {
      if (!tempGenderArray.includes(v.gender)) {
        tempGenderArray.push(v.gender);
      }
      if (!tempDialectArray.includes(v.locale)) {
        tempDialectArray.push(v.locale);
      }
      v.voices.forEach((k: string) => {
        if (!tempModeArray.includes(k)) {
          tempModeArray.push(k);
        }
      });
    });
    setVoiceOptions([
      {
        name: 'dialect',
        getter: synthesisDialect,
        setter: setSynthesisDialect,
        options: ['all', ...tempDialectArray],
      },
      {
        name: 'gender',
        getter: synthesisGender,
        setter: setSynthesisGender,
        options: ['all', ...tempGenderArray],
      },
      {
        name: 'mode',
        getter: synthesisMode,
        setter: setSynthesisMode,
        options: ['all', ...tempModeArray],
      },
    ]);
  }, [synthesisMetadata]);

  const clickVoice = (v: string) => {
    console.log('v:', v);
  };

  return (
    <CenteredFlexBox>
      <Box sx={{ width: '100%', maxWidth: 'sm' }}>
        <Meta title="speech synthesis" />
        <AbInfoHeader title="Speech Synthesis" />
        <CenteredFlexBox p={1}>
          <Stack direction="row" sx={{ flexWrap: 'wrap' }}>
            {synthesisMetadata.map((k: APIVoiceOptionsModel, i) => (
              <AbButton
                label={k.name}
                onClick={() => clickVoice(k.name)}
                key={i}
                disabled={false}
                variant={k.variant}
                variation="voice"
              />
            ))}
          </Stack>
        </CenteredFlexBox>
        <Box px={1} component="form" noValidate autoComplete="off">
          <Box sx={{ mb: 1 }}>
            <AbAccordion label="Options" variation="small">
              {voiceOptions.map((item: voiceOptionsModel) => (
                <Box key={item.name}>
                  <AbRadioGroup
                    name={item.name}
                    getter={item.getter}
                    handleChangeEvent={(e) => {
                      item.setter(e.target.value);
                    }}
                    options={item.options}
                    variation="small"
                  />
                </Box>
              ))}
            </AbAccordion>
          </Box>
          <AbTextField variation="synthesis" />
          <Typography align="center" p={{ sm: 4, xs: 2 }}>
            <Button
              disabled={emptyString}
              variant="contained"
              color="primary"
              onClick={() => getSynthesis(synthesisText, setSynthesisAudio)}
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
