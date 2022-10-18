import { useRecoilValue } from 'recoil';

import Stack from '@mui/material/Stack';

import AbButton from '@/components/AbButton';
import { synthesisModelOptions, useSynthesisModel } from '@/store/synthesis/voiceOptions';

const AbSynthesisPitchCtrl = () => {
  const { synthesisModel, setSynthesisModel } = useSynthesisModel();
  // const synthesisVoiceSelectedValue = useRecoilValue(synthesisVoiceSelected);
  const synthesisModelOptionsValue = useRecoilValue(synthesisModelOptions);

  return (
    <Stack
      direction="row"
      spacing={{ sm: 1, xs: 0.5 }}
      sx={{ flexWrap: 'wrap' }}
      justifyContent="center"
      my={{ sm: 2, xs: 1 }}
    >
      {synthesisModelOptionsValue.map((m, i) => (
        <AbButton
          label={m}
          onClick={() => setSynthesisModel(m)}
          key={i}
          selected={m === synthesisModel ? true : false}
          variation="voice"
        />
      ))}
    </Stack>
  );
};

export default AbSynthesisPitchCtrl;
