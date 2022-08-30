/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { AbButton, AbRadioGroup } from 'abair-component-library';

import AbAccordion from '@/components/AbAccordion';
import AbAudioPlayer from '@/components/AbAudioPlayer';
import AbInfoHeader from '@/components/AbInfoHeader';
import AbMap from '@/components/AbMap';
// import AbRadioGroup from '@/components/AbRadioGroup';
import AbTextField from '@/components/AbTextField';
import Meta from '@/components/Meta';
import { CenteredFlexBox } from '@/components/styled';
import getSynthesisMetadata from '@/services/synthesis/metadata';
import {
  APIVoiceOptionsModel,
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

function SpeechSynthesis() {
  const { synthesisText } = useSynthesisText();
  const { synthesisAudio, setSynthesisAudio } = useSynthesisAudio();
  const { synthesisMetadata, setSynthesisMetadata } = useSynthesisMetadata();
  const { voiceOptions, setVoiceOptions } = useVoiceOptions();
  const { synthesisGender, setSynthesisGender } = useSynthesisGender();
  const { synthesisMode, setSynthesisMode } = useSynthesisMode();
  // const { synthesisMap, setSynthesisMap } = useSynthesisMap();
  // const { synthesisPitch, setSynthesisPitch } = useSynthesisPitch();
  // const { synthesisSpeed, setSynthesisSpeed } = useSynthesisSpeed();
  const { synthesisDialect, setSynthesisDialect } = useSynthesisDialect();
  const emptyString = useRecoilValue(isSynthesisTextEmptyString);
  const emptyAudio = useRecoilValue(isSynthesisAudioEmpty);
  const mapRef = useRef(null);

  useEffect(() => {
    getSynthesisMetadata()
      .then((res) => {
        setSynthesisMetadata(res);
      })
      .catch((error) => {
        alert('error:' + error);
      });
    console.log('mapRef.current', mapRef.current);
  }, []);

  useEffect(() => {
    const tempGenderArray: string[] = [];
    const tempDialectArray: string[] = [];
    const tempModeArray: string[] = [];
    Object.values(synthesisMetadata).forEach((v: APIVoiceOptionsModel) => {
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

  const optionSelected = (option: string, choice: string) => {
    option === 'dialect' ? setSynthesisDialect(choice) : null;
    option === 'gender' ? setSynthesisGender(choice) : null;
    option === 'mode' ? setSynthesisMode(choice) : null;

    const newVoiceOptions: voiceOptionsModel[] = [...voiceOptions].map(
      (item: voiceOptionsModel) => {
        if (item.name === option) return { ...item, getter: choice };
        else return item;
      },
    );
    setVoiceOptions(newVoiceOptions);
  };

  useEffect(() => {
    const newSynthesisMetadata: APIVoiceOptionsModel[] = [...synthesisMetadata].map(
      (item: APIVoiceOptionsModel) => {
        let dialectState = false;
        if (item.locale === synthesisDialect || synthesisDialect === 'all') {
          dialectState = true;
        }
        let genderState = false;
        if (item.gender === synthesisGender || synthesisGender === 'all') {
          genderState = true;
        }
        let modeState = false;
        if (item.voices.includes(synthesisMode) || synthesisMode === 'all') {
          modeState = true;
        }

        if (dialectState && genderState && modeState) {
          return { ...item, disabled: false };
        } else return { ...item, disabled: true };
      },
    );
    setSynthesisMetadata(newSynthesisMetadata);
  }, [synthesisDialect, synthesisGender, synthesisMode]);

  const clickVoice = (v: string) => {
    const newSynthesisMetadata: APIVoiceOptionsModel[] = [...synthesisMetadata].map(
      (item: APIVoiceOptionsModel) => {
        if (item.selected) return { ...item, selected: false };
        else if (item.name === v) return { ...item, selected: true };
        else return item;
      },
    );
    setSynthesisMetadata(newSynthesisMetadata);
  };

  return (
    <CenteredFlexBox>
      <Box sx={{ width: '100%', maxWidth: 'sm' }}>
        <Meta title="speech synthesis" />
        <AbInfoHeader title="Speech Synthesis" />
        <CenteredFlexBox p={1}>
          <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
            {synthesisMetadata.map((k: APIVoiceOptionsModel, i) => (
              <AbButton
                label={k.name}
                onClick={() => clickVoice(k.name)}
                key={i}
                disabled={k.disabled}
                selected={k.selected}
                variation="voice"
              />
            ))}
          </Stack>
        </CenteredFlexBox>
        <CenteredFlexBox m={2}>
          <AbMap />
        </CenteredFlexBox>
        <Box px={1} component="form" noValidate autoComplete="off">
          <Box sx={{ mb: 1 }}>
            <AbAccordion label="Options" variation="small">
              {voiceOptions.map((item: voiceOptionsModel) => (
                <Box key={item.name}>
                  <AbRadioGroup
                    name={item.name}
                    value={item.getter}
                    handleChangeEvent={(e) => {
                      optionSelected(item.name, e.target.value);
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
