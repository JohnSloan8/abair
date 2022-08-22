import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';

import axios from 'axios';

import AbAccordion from '@/components/AbAccordion';
import AbAudioPlayer from '@/components/AbAudioPlayer';
import AbInfoHeader from '@/components/AbInfoHeader';
import AbTextField from '@/components/AbTextField';
import Meta from '@/components/Meta';
import { CenteredFlexBox } from '@/components/styled';
import {
  isSynthesisAudioEmpty,
  isSynthesisTextEmptyString,
  useSynthesisAudio, // useSynthesisAudio,
  useSynthesisDialect, // useSynthesisGender, // useSynthesisMode,
  // useSynthesisPitch,
  // useSynthesisSpeed,
  useSynthesisText,
} from '@/store/synthesis';

// import { getVoice, pitchNum, speedNum } from './types';

function SpeechSynthesis() {
  const { synthesisText } = useSynthesisText();
  const { synthesisDialect, setSynthesisDialect } = useSynthesisDialect();
  const { synthesisAudio, setSynthesisAudio } = useSynthesisAudio();
  const emptyString = useRecoilValue(isSynthesisTextEmptyString);
  const emptyAudio = useRecoilValue(isSynthesisAudioEmpty);

  useEffect(() => {
    console.log('synthesisAudio:', synthesisAudio);
    console.log('emptyAudio:', emptyAudio);
  }, [synthesisAudio, emptyAudio]);

  const getSynthesis = () => {
    axios({
      // method: 'post',
      // // url: 'https://phoneticsrv3.lcs.tcd.ie/nemo/synthesise',
      // url: 'https://abair.ie/api2/synthesise/',
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      // data: {
      //   input: synthesisText,
      //   voice: getVoice(synthesisGender, synthesisDialect) + '.nemo',
      //   speaker: null,
      //   outputType: 'JSON',
      //   audioEncoding: 'wav',
      //   cutSilence: false,
      //   speed: speedNum[synthesisSpeed],
      //   ps: null,
      //   pa: pitchNum[synthesisPitch],
      // },
      method: 'get',
      // url: 'https://phoneticsrv3.lcs.tcd.ie/nemo/synthesise',
      url: 'https://abair.ie/api2/synthesise',
      headers: {
        accept: 'application/json',
      },
      params: {
        input: synthesisText,
        voice: 'ga_UL_anb_nnmnkwii',
        outputType: 'JSON',
        audioEncoding: 'LINEAR16',
        speed: 1,
        pitch: 1,
      },
    })
      .then(function (response) {
        // console.log(response);
        console.log(response.data);
        setSynthesisAudio('data:audio/wav;base64,' + response.data.audioContent);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    // synthesisController(
    //   synthesisText,
    //   synthesisDialect,
    //   synthesisGender,
    //   synthesisSpeed,
    //   synthesisPitch,
    //   synthesisMode,
    //   setSynthesisAudio,
    // );
  };

  return (
    <CenteredFlexBox>
      <Box sx={{ width: '100%', maxWidth: 'sm' }}>
        <Meta title="speech synthesis" />
        <AbInfoHeader title="Speech Synthesis" />
        <Box px={1} component="form" noValidate autoComplete="off">
          <FormControl sx={{ px: 2, justifyContent: 'center' }}>
            <FormLabel id="demo-row-radio-buttons-group-label">Dialect</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={synthesisDialect}
              onChange={(e) => setSynthesisDialect(e.target.value)}
            >
              <FormControlLabel value="Ulster" control={<Radio />} label="Ulster" />
              <FormControlLabel value="Connaught" control={<Radio />} label="Connaught" />
              <FormControlLabel value="Munster" control={<Radio />} label="Munster" />
            </RadioGroup>
          </FormControl>
          <Box sx={{ mb: 2 }}>
            <AbAccordion variation="synthesis" />
          </Box>
          <AbTextField variation="synthesis" />
          <Typography align="center" p={{ sm: 4, xs: 2 }}>
            <Button
              disabled={emptyString}
              variant="contained"
              color="primary"
              onClick={getSynthesis}
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
