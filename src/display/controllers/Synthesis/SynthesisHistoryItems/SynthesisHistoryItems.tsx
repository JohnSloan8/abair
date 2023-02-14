import { useRef } from 'react';

import DownloadIcon from '@mui/icons-material/Download';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { AbIconButton, AbSynthesisHistoryItem, FullSizeCenteredFlexBox } from 'abair-components';

import { useSynthesisAudios } from '@/store/synthesis';

const SynthesisHistoryItems = () => {
  const { synthesisAudios } = useSynthesisAudios();
  const audiosRef = useRef<HTMLAudioElement>(null);
  const aRef = useRef<HTMLAnchorElement>(null);

  const playAudios = (audioData: string) => {
    if (audiosRef.current !== undefined) {
      if (audiosRef.current !== null) {
        audiosRef.current.src = audioData;
        audiosRef.current.play();
      }
    }
  };

  const downloadAudio = (
    audioData: string,
    v: string,
    m: string,
    s: string,
    p: string,
    t: string,
  ) => {
    if (aRef.current !== undefined) {
      if (aRef.current !== null) {
        aRef.current.href = audioData;
        aRef.current.download = `${v}_${m}_${s}_${p}_${t}.wav`;
        aRef.current.click();
      }
    }
  };

  return (
    <Box width={'95%'} mt={2}>
      {synthesisAudios.map((audiosObj, i) => (
        <Box key={i}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <AbSynthesisHistoryItem
                voice={audiosObj.voice}
                model={audiosObj.model}
                speed={audiosObj.speed}
                pitch={audiosObj.pitch}
                text={audiosObj.text}
                onClick={() => {
                  console.log('audio clicked');
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <FullSizeCenteredFlexBox
                nonce={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
              >
                <AbIconButton
                  selected={true}
                  color="secondary"
                  onClick={() => {
                    playAudios(audiosObj.audioData);
                  }}
                  icon={PlayArrowIcon}
                />
              </FullSizeCenteredFlexBox>
            </Grid>
            <Grid item xs={2}>
              <FullSizeCenteredFlexBox
                nonce={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
              >
                <AbIconButton
                  selected={true}
                  color="secondary"
                  onClick={() => {
                    downloadAudio(
                      audiosObj.audioData,
                      audiosObj.voice,
                      audiosObj.model,
                      audiosObj.speed,
                      audiosObj.pitch,
                      audiosObj.text,
                    );
                  }}
                  icon={DownloadIcon}
                />
              </FullSizeCenteredFlexBox>
            </Grid>
          </Grid>
        </Box>
      ))}
      <audio src={''} ref={audiosRef} />
      <a href={''} ref={aRef} download={'tester.wav'} />
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
