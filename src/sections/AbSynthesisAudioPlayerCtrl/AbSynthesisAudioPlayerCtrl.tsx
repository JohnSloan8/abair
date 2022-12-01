import { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import Box from '@mui/material/Box';

import { AbIconButton } from 'abair-components';

import {
  isSynthesisAudioEmpty,
  useAwaitingSynthesis,
  useSynthesisAudio,
  useSynthesisAudioPlaying,
} from '@/store/synthesis';

const AbSynthesisAudioPlayerCtrl = () => {
  const [firstLoad, setFirstLoad] = useState(true);
  const { synthesisAudio } = useSynthesisAudio();
  const emptySynthesisAudio = useRecoilValue(isSynthesisAudioEmpty);
  const { awaitingSynthesis } = useAwaitingSynthesis();
  const { synthesisAudioPlaying, setSynthesisAudioPlaying } = useSynthesisAudioPlaying();
  const audioRef = useRef<HTMLAudioElement>(null);

  const playSynthesisAudio = () => {
    if (audioRef.current !== undefined) {
      if (audioRef.current !== null) {
        audioRef.current.play();
        setSynthesisAudioPlaying(true);
      } else {
        console.log('audio.current === null');
      }
    } else {
      console.log('audio.current === undefined');
    }
  };

  const stopSynthesisAudio = () => {
    console.log('in stop');
    if (audioRef.current !== undefined) {
      if (audioRef.current !== null) {
        audioRef.current.pause();
        setSynthesisAudioPlaying(false);
      } else {
        console.log('audio.current === null');
      }
    } else {
      console.log('audio.current === undefined');
    }
  };

  useEffect(() => {
    firstLoad ? setFirstLoad(false) : playSynthesisAudio();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [synthesisAudio]);

  return (
    <Box
      sx={{
        visibility: emptySynthesisAudio || awaitingSynthesis ? 'hidden' : 'visible',
      }}
    >
      {!synthesisAudioPlaying ? (
        <AbIconButton
          color="secondary"
          onClick={() => {
            playSynthesisAudio();
          }}
          icon={PlayArrowIcon}
        />
      ) : (
        <AbIconButton
          color="secondary"
          onClick={() => {
            stopSynthesisAudio();
          }}
          icon={StopIcon}
        />
      )}
      <audio src={synthesisAudio} ref={audioRef} onEnded={stopSynthesisAudio} />
    </Box>
  );
};

export default AbSynthesisAudioPlayerCtrl;
