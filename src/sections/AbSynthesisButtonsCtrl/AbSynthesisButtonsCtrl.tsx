import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';

import AbIconButton from '@/components/AbIconButton';
import Loading from '@/components/Loading';
import { CenteredFlexBox } from '@/components/styled';
import getSynthesis from '@/services/abair/synthesis';
import getSynthesisMetadata from '@/services/abair/synthesis/metadata';
import { postSynthesisRequest } from '@/services/supabase/synthesis-requests';
import { useSession, useSessionID } from '@/store/auth';
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

import AbSynthesisAudioPlayerCtrl from '../AbSynthesisAudioPlayerCtrl';

const AbSynthesisButtonsCtrl = () => {
  const { sessionID } = useSessionID();
  const { session } = useSession();
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
    filteredSynthesisVoiceOptionsValue.length === 0
      ? setSynthesisVoiceIndex(-1)
      : setSynthesisVoiceIndex(
          synthesisVoiceOptions.indexOf(filteredSynthesisVoiceOptionsValue[0]),
        );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredSynthesisVoiceOptionsValue]);

  const initGetSynthesis = () => {
    setAwaitingSynthesis(true);
    setSynthesisAudio('');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getSynthesis(synthesisText, synthesisVoiceSelectedValue).then((data: any) => {
      setSynthesisAudio('data:audio/wav;base64,' + data.audioContent);
      setAwaitingSynthesis(false);
      postSynthesisRequest({
        user_id: session === null ? null : session.user.id,
        session_ID: sessionID,
        text: synthesisText,
      });
    });
  };

  return (
    <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
      <Grid container direction="row" height="100%">
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <CenteredFlexBox>
            {!awaitingSynthesis ? (
              // <Typography align="center" sx={{ height: '100%' }}>
              <AbIconButton
                disabled={emptyString || synthesisVoiceIndex === -1}
                variation="record"
                handleClick={initGetSynthesis}
                icon={RecordVoiceOverIcon}
              />
            ) : (
              // </Typography>
              <Loading />
            )}
          </CenteredFlexBox>
        </Grid>
        <Grid item xs={4}>
          <CenteredFlexBox>
            <AbSynthesisAudioPlayerCtrl />
          </CenteredFlexBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AbSynthesisButtonsCtrl;
