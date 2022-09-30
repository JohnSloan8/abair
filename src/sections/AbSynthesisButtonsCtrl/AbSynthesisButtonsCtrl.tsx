import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import AbIconButton from '@/components/AbIconButton';
import Loading from '@/components/Loading';
import getSynthesis from '@/services/abair/synthesis';
import getSynthesisMetadata from '@/services/abair/synthesis/metadata';
import {
  isSynthesisTextEmptyString,
  useAwaitingSynthesis,
  useSynthesisAudio,
  useSynthesisText,
} from '@/store/synthesis';
import {
  filteredSynthesisVoiceOptions,
  synthesisVoiceSelected,
  useSynthesisVoiceIndex,
  useSynthesisVoiceOptions,
} from '@/store/synthesis/voiceOptions';

const AbSynthesisButtonsCtrl = () => {
  const { synthesisText } = useSynthesisText();
  const { setSynthesisAudio } = useSynthesisAudio();
  const emptyString = useRecoilValue(isSynthesisTextEmptyString);
  const synthesisVoiceSelectedValue = useRecoilValue(synthesisVoiceSelected);
  const filteredSynthesisVoiceOptionsValue = useRecoilValue(filteredSynthesisVoiceOptions);
  const { synthesisVoiceOptions, setSynthesisVoiceOptions } = useSynthesisVoiceOptions();
  const { synthesisVoiceIndex, setSynthesisVoiceIndex } = useSynthesisVoiceIndex();
  const { awaitingSynthesis, setAwaitingSynthesis } = useAwaitingSynthesis();

  useEffect(() => {
    synthesisVoiceOptions.length === 0 ? getSynthesisMetadata(setSynthesisVoiceOptions) : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log('filteredSynthesisVoiceOptionsValue:', filteredSynthesisVoiceOptionsValue);
    filteredSynthesisVoiceOptionsValue.length === 0
      ? setSynthesisVoiceIndex(-1)
      : setSynthesisVoiceIndex(
          synthesisVoiceOptions.indexOf(filteredSynthesisVoiceOptionsValue[0]),
        );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredSynthesisVoiceOptionsValue]);

  const initGetSynthesis = () => {
    setAwaitingSynthesis(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getSynthesis(synthesisText, synthesisVoiceSelectedValue).then((data: any) => {
      setSynthesisAudio('data:audio/wav;base64,' + data.audioContent);
      setAwaitingSynthesis(false);
    });
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container direction="row">
        <Grid item xs={5}></Grid>
        <Grid item xs={2}>
          {!awaitingSynthesis ? (
            <Typography align="center" sx={{ height: '100%' }}>
              <AbIconButton
                disabled={emptyString || synthesisVoiceIndex === -1}
                variation="record"
                handleClick={initGetSynthesis}
                icon={RecordVoiceOverIcon}
              />
            </Typography>
          ) : (
            <Loading />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AbSynthesisButtonsCtrl;
