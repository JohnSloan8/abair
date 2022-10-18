import { useRecoilValue } from 'recoil';

import Stack from '@mui/material/Stack';

import AbButton from '@/components/AbButton';
import {
  filteredSynthesisVoiceOptions,
  synthesisVoiceModel,
  synthesisVoiceSelected,
  useSynthesisVoiceIndex,
  useSynthesisVoiceOptions,
} from '@/store/synthesis/voiceOptions';

const AbSynthesisPitchCtrl = () => {
  const synthesisVoiceSelectedValue = useRecoilValue(synthesisVoiceSelected);
  const filteredSynthesisVoiceOptionsValue = useRecoilValue(filteredSynthesisVoiceOptions);
  const { setSynthesisVoiceIndex } = useSynthesisVoiceIndex();
  const { synthesisVoiceOptions } = useSynthesisVoiceOptions();

  return (
    <Stack
      direction="row"
      spacing={{ sm: 1, xs: 0.5 }}
      sx={{ flexWrap: 'wrap' }}
      justifyContent="center"
      my={{ sm: 2, xs: 1 }}
    >
      {filteredSynthesisVoiceOptionsValue !== undefined &&
        filteredSynthesisVoiceOptionsValue.map((k: synthesisVoiceModel, i: number) => (
          <AbButton
            label={k.name}
            onClick={() => setSynthesisVoiceIndex(synthesisVoiceOptions.indexOf(k))}
            key={i}
            selected={k === synthesisVoiceSelectedValue ? true : false}
            variation="voice"
          />
        ))}
    </Stack>
  );
};

export default AbSynthesisPitchCtrl;
