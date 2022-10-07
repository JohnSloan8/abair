import { useEffect, useLayoutEffect, useRef } from 'react';

import Box from '@mui/material/Box';

import { gsap } from 'gsap';

interface AbProgressBarProps {
  running: boolean;
  color?: 'warning.main';
  timeLimit: number;
  handleComplete: () => void;
}

const AbProgressBar = ({ running, color, timeLimit, handleComplete }: AbProgressBarProps) => {
  const recognitionProgressTimer = useRef(null);
  const tl = useRef(gsap.timeline());

  useLayoutEffect(() => {
    tl.current && tl.current.progress(0).kill();
    tl.current = gsap.timeline().fromTo(
      recognitionProgressTimer.current,
      { width: '0%' },
      {
        width: '100%',
        ease: 'none',
        duration: timeLimit,
        onComplete: () => {
          handleComplete();
        },
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (running) {
      console.log('progress bar started');
      tl.current.play();
    } else if (!running) {
      console.log('progress bar stopped');
      tl.current.pause(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  return (
    <Box
      id="progressBar"
      ref={recognitionProgressTimer}
      sx={{
        width: 0,
        height: '100%',
        backgroundColor: color,
      }}
    ></Box>
  );
};

export default AbProgressBar;
