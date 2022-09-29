import { useRecoilValue } from 'recoil';

import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

import AbIconButton from '@/components/AbIconButton';
import { CenteredFlexBox } from '@/components/styled';
import getSynthesis from '@/services/abair/synthesis';
import { isSynthesisTextEmptyString, useSynthesisAudio, useSynthesisText } from '@/store/synthesis';
import { synthesisVoiceSelectedState } from '@/store/synthesis/voiceOptions';

const AbSynthesisButtonsCtrl = () => {
  const { synthesisText } = useSynthesisText();
  const { setSynthesisAudio } = useSynthesisAudio();
  const emptyString = useRecoilValue(isSynthesisTextEmptyString);
  const synthesisVoiceSelected = useRecoilValue(synthesisVoiceSelectedState);
  return (
    <CenteredFlexBox sx={{ width: '100%', height: '100%' }}>
      <AbIconButton
        disabled={emptyString}
        variation="record"
        handleClick={() => {
          getSynthesis(synthesisText, synthesisVoiceSelected, setSynthesisAudio);
          console.log('recording click');
        }}
        icon={RecordVoiceOverIcon}
      />
    </CenteredFlexBox>
  );
};

export default AbSynthesisButtonsCtrl;
