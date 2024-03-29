import { useRef } from 'react';

import Box from '@mui/material/Box';

import { AbSynthesisHistoryItem } from 'abair-components';

import { useSynthesisAudios } from '@/store/synthesis';

const SynthesisHistoryItems = () => {
  const { synthesisAudios } = useSynthesisAudios();
  const audiosRef = useRef<HTMLAudioElement>(null);

  const playAudios = (audioData: string) => {
    if (audiosRef.current !== undefined) {
      if (audiosRef.current !== null) {
        audiosRef.current.src = audioData;
        audiosRef.current.play();
      }
    }
  };

  return (
    <Box width={'95%'} mt={2}>
      {synthesisAudios.map((audiosObj, i) => (
        <Box key={i}>
          <AbSynthesisHistoryItem
            voice={audiosObj.voice}
            model={audiosObj.model}
            speed={audiosObj.speed}
            pitch={audiosObj.pitch}
            text={audiosObj.text}
            onClick={() => {
              playAudios(audiosObj.audioData);
            }}
          />
        </Box>
      ))}
      <audio src={''} ref={audiosRef} />
    </Box>
  );
};

export default SynthesisHistoryItems;

{
  /* <Box
key={i}
py={1}
my={1}
sx={{
  width: '100%',
  backgroundColor: 'secondary.light',
  borderRadius: '3px',
  '&:hover': { backgroundColor: 'secondary.medium', cursor: 'pointer' },
}}
onClick={() => {
  playAudios(audiosObj.audioData);
}}
>
<CenteredFlexBox>
  <Typography variant="body2" align="center">
    {`voice=${audiosObj.voice} : model=${audiosObj.model} : speed=${audiosObj.speed} : pitch=${audiosObj.pitch}`}
  </Typography>
</CenteredFlexBox>
<CenteredFlexBox>
  <Typography mt={1} fontStyle="italic" variant="body1" align="center">
    {`"${audiosObj.text}"`}
  </Typography>
</CenteredFlexBox>
</Box> */
}
