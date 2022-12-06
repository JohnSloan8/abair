/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

import { AbIconButton } from 'abair-components';
import { AbLoading } from 'abair-components/';

import { CenteredFlexBox } from '@/display/utils/flex';
import getSynthesis from '@/services/abair/synthesis';
import getSynthesisMetadata from '@/services/abair/synthesis/metadata';
import { postSynthesisRequest } from '@/services/supabase/synthesis-requests';
import { useSession, useSessionID } from '@/store/auth';
import {
  isSynthesisTextEmptyString,
  useAwaitingSynthesis,
  useSynthesisAudio,
  useSynthesisAudios,
  useSynthesisText,
} from '@/store/synthesis';
import {
  filteredSynthesisVoiceOptions,
  synthesisVoiceSelected,
  useSynthesisModel,
  useSynthesisPitch,
  useSynthesisSpeed,
  useSynthesisVoiceIndex,
  useSynthesisVoiceOptions,
} from '@/store/synthesis/voiceOptions';

const SynthesisSpeakButton = () => {
  const { sessionID } = useSessionID();
  const { session } = useSession();
  const { synthesisText } = useSynthesisText();
  const { setSynthesisAudio } = useSynthesisAudio();
  const { setSynthesisAudios } = useSynthesisAudios();
  const emptyString = useRecoilValue(isSynthesisTextEmptyString);
  const synthesisVoiceSelectedValue = useRecoilValue(synthesisVoiceSelected);
  const filteredSynthesisVoiceOptionsValue = useRecoilValue(filteredSynthesisVoiceOptions);
  const { synthesisVoiceOptions, setSynthesisVoiceOptions } = useSynthesisVoiceOptions();
  const { synthesisVoiceIndex, setSynthesisVoiceIndex } = useSynthesisVoiceIndex();
  const { awaitingSynthesis, setAwaitingSynthesis } = useAwaitingSynthesis();
  const { synthesisModel, setSynthesisModel } = useSynthesisModel();
  const { synthesisPitch } = useSynthesisPitch();
  const { synthesisSpeed } = useSynthesisSpeed();

  useEffect(() => {
    if (synthesisVoiceOptions.length === 0) {
      getSynthesisMetadata().then((res) => {
        setSynthesisVoiceOptions(res);
      });
    } else {
      null;
    }
  }, []);

  useEffect(() => {
    filteredSynthesisVoiceOptionsValue !== undefined
      ? filteredSynthesisVoiceOptionsValue.length === 0
        ? setSynthesisVoiceIndex(-1)
        : setSynthesisVoiceIndex(
            synthesisVoiceOptions.indexOf(filteredSynthesisVoiceOptionsValue[0]),
          )
      : null;
  }, [filteredSynthesisVoiceOptionsValue]);

  useEffect(() => {
    if (synthesisVoiceSelectedValue !== undefined) {
      setSynthesisModel(
        synthesisVoiceSelectedValue.voices[synthesisVoiceSelectedValue.voices.length - 1],
      );
    }
  }, [synthesisVoiceSelectedValue]);

  const initGetSynthesis = () => {
    setAwaitingSynthesis(true);
    setSynthesisAudio('');
    if (synthesisVoiceSelectedValue !== undefined) {
      getSynthesis(
        synthesisText,
        synthesisVoiceSelectedValue,
        synthesisModel,
        synthesisPitch,
        synthesisSpeed,
      ).then((data: any) => {
        setSynthesisAudio('data:audio/wav;base64,' + data.audioContent);
        setSynthesisAudios((synthesisAudios) => {
          return [
            {
              voice: synthesisVoiceSelectedValue.name,
              model: synthesisModel,
              speed: synthesisSpeed.toString(),
              pitch: synthesisPitch.toString(),
              audioData: 'data:audio/wav;base64,' + data.audioContent,
              text: synthesisText,
            },
            ...synthesisAudios,
          ];
        });
        setAwaitingSynthesis(false);
        postSynthesisRequest({
          user_id: session === null ? null : session.user.id,
          session_ID: sessionID,
          text: synthesisText,
        });
      });
    }
  };

  return (
    <CenteredFlexBox>
      {!awaitingSynthesis ? (
        <AbIconButton
          disabled={emptyString || synthesisVoiceIndex === -1}
          color="secondary"
          onClick={initGetSynthesis}
          icon={RecordVoiceOverIcon}
        />
      ) : (
        <AbLoading />
      )}
    </CenteredFlexBox>
  );
};

export default SynthesisSpeakButton;
