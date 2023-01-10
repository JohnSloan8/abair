import { useRecoilValue } from 'recoil';

import Stack from '@mui/material/Stack';

import { AbButton } from 'abair-components';

import { synthesisVoiceModel } from '@/models/synthesis';
import {
  filteredSynthesisVoices,
  synthesisVoiceSelected,
  useSynthesisVoiceIndex,
  useSynthesisVoices,
} from '@/store/synthesis';

const SynthesisVoiceButtons = () => {
  const synthesisVoiceSelectedValue = useRecoilValue(synthesisVoiceSelected);
  const filteredSynthesisVoicesValue = useRecoilValue(filteredSynthesisVoices);
  const { setSynthesisVoiceIndex } = useSynthesisVoiceIndex();
  const { synthesisVoices } = useSynthesisVoices();

  return (
    <Stack
      direction="row"
      spacing={{ sm: 1, xs: 0.5 }}
      sx={{ flexWrap: 'wrap' }}
      justifyContent="center"
      my={{ sm: 2, xs: 1 }}
    >
      {filteredSynthesisVoicesValue !== undefined &&
        filteredSynthesisVoicesValue.map((k: synthesisVoiceModel, i: number) => (
          <AbButton
            label={k.name}
            onClick={() => setSynthesisVoiceIndex(synthesisVoices.indexOf(k))}
            key={i}
            selected={k === synthesisVoiceSelectedValue ? true : false}
            color={'secondary'}
          />
        ))}
    </Stack>
  );
};

export default SynthesisVoiceButtons;
