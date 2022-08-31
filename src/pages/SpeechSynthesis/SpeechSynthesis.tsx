/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { AbButton } from 'abair-component-library';

import AbAudioPlayer from '@/components/AbAudioPlayer';
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
  synthesisVoiceState,
  useSynthesisVoice,
  useSynthesisVoiceOptions,
} from '@/store/synthesis/voiceOptions';

import getSynthesis from '../../services/synthesis';

function SpeechSynthesis() {
  const { synthesisText } = useSynthesisText();
  const { synthesisAudio, setSynthesisAudio } = useSynthesisAudio();
  const { synthesisVoice, setSynthesisVoice } = useSynthesisVoice();
  const { setSynthesisVoiceOptions } = useSynthesisVoiceOptions();
  const emptyString = useRecoilValue(isSynthesisTextEmptyString);
  const emptyAudio = useRecoilValue(isSynthesisAudioEmpty);
  const filteredSynthesisVoiceOptions = useRecoilValue(filteredSynthesisVoiceOptionsState);
  const resetSynthesisVoice = useResetRecoilState(synthesisVoiceState);

  useEffect(() => {
    getSynthesisMetadata()
      .then((res) => {
        setSynthesisVoiceOptions(res);
      })
      .catch((error) => {
        alert('error:' + error);
      });
  }, []);

  useEffect(() => {
    console.log('filteredSynthesisVoiceOptions:', filteredSynthesisVoiceOptions);
  }, [filteredSynthesisVoiceOptions]);

  const toggleVoice = (voice: synthesisVoiceOptionsModel) => {
    if (synthesisVoice === voice) {
      resetSynthesisVoice();
    } else {
      setSynthesisVoice(voice);
    }
  };

  return (
    <CenteredFlexBox>
      <Box sx={{ width: '100%', maxWidth: 'sm' }}>
        <Meta title="speech synthesis" />
        <AbInfoHeader title="Speech Synthesis" />
        <CenteredFlexBox p={1}>
          <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
            {filteredSynthesisVoiceOptions.map((k: APIVoiceOptionsModel, i) => (
              <AbButton
                label={k.name}
                onClick={() => toggleVoice(k)}
                key={i}
                selected={k === synthesisVoice ? true : false}
                variation="voice"
              />
            ))}
          </Stack>
        </CenteredFlexBox>
        <CenteredFlexBox m={2}>
          <AbMap />
        </CenteredFlexBox>
        <Box px={1} component="form" noValidate autoComplete="off">
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
