import { useRecoilValue } from 'recoil';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { AbButton } from 'abair-components';

import { synthesisModelOptions, useSynthesisModel } from '@/store/synthesis/voiceOptions';

const SynthesisModel = () => {
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
        <Box mb={{ sm: 1, xs: 0.5 }} key={i}>
          <AbButton
            label={m}
            onClick={() => setSynthesisModel(m)}
            selected={m === synthesisModel ? true : false}
            color={'secondary'}
          />
        </Box>
      ))}
    </Stack>
  );
};

export default SynthesisModel;
