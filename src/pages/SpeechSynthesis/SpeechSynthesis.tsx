import { useRecoilValue } from 'recoil';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { AbRadioGroup, AbRadioGroupProps } from 'abair-component-library';

import AbAccordion from '@/components/AbAccordion';
import AbAudioPlayer from '@/components/AbAudioPlayer';
import AbInfoHeader from '@/components/AbInfoHeader';
// import AbRadioGroup from '@/components/AbRadioGroup';
import AbTextField from '@/components/AbTextField';
import Meta from '@/components/Meta';
import { CenteredFlexBox } from '@/components/styled';
import {
  isSynthesisAudioEmpty,
  isSynthesisTextEmptyString,
  useSynthesisAudio, // useSynthesisAudio,
  useSynthesisDialect, // useSynthesisPitch,
  // useSynthesisSpeed,
  useSynthesisText,
} from '@/store/synthesis';

import getSynthesis from '../../services/synthesis';
import CreateItem from './options';

// import { getVoice, pitchNum, speedNum } from './typesgit';

function SpeechSynthesis() {
  const { synthesisText } = useSynthesisText();
  const { synthesisDialect, setSynthesisDialect } = useSynthesisDialect();
  const { synthesisAudio, setSynthesisAudio } = useSynthesisAudio();

  const emptyString = useRecoilValue(isSynthesisTextEmptyString);
  const emptyAudio = useRecoilValue(isSynthesisAudioEmpty);
  const synthesisOptions = CreateItem();

  // const setterForSetSynthesisDialect = () => {};

  return (
    <CenteredFlexBox>
      <Box sx={{ width: '100%', maxWidth: 'sm' }}>
        <Meta title="speech synthesis" />
        <AbInfoHeader title="Speech Synthesis" />
        <Box px={1} component="form" noValidate autoComplete="off">
          <Box mx={2}>
            <AbRadioGroup
              name="Dialect"
              getter={synthesisDialect}
              handleChangeEvent={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSynthesisDialect(e.target.value);
              }}
              options={['Ulster', 'Connaught', 'Munster']}
              variation="small"
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <AbAccordion label="Advanced Options" variation="small">
              {synthesisOptions.map((item: AbRadioGroupProps) => (
                <Box key={item.name}>
                  <AbRadioGroup
                    name={item.name}
                    getter={item.getter}
                    handleChangeEvent={(e: React.ChangeEvent<HTMLInputElement>) => {
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
